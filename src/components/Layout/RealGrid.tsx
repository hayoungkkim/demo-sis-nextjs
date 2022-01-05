/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { Component, useCallback, useEffect, useRef, useState } from 'react'

import { columns, fields, rows } from '../../api/realgrid-data'
import {
  ClickData,
  GridView,
  LayoutItem,
  LocalDataProvider,
  LocalTreeDataProvider,
  MenuItem
} from 'realgrid'

import {
  Button,
  ButtonGroup,
  Table,
  Tbody,
  Td,
  Tr,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Switch,
  Stack,
  Input,
  IconButton,
  FormLabel,
  Flex
} from '@chakra-ui/react'
import getConfig from 'next/config'
import { FocusableElement } from '@chakra-ui/utils'

const RealGrid = () => {
  let dataProvider: LocalDataProvider | null = null
  let gridView: GridView | null = null
  const searchRef = useRef<HTMLInputElement>(null)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { publicRuntimeConfig } = getConfig()

  const layout = [
    '연동사이트설정ID',
    {
      name: '연동사이트',
      direction: 'vertical',
      width: 200,
      items: ['연동사이트'],
      header: {
        template: '<input type="image" height="16px" width="16px"  src="/favicon.ico" />'
      }
    },
    '쇼핑몰명',
    '센터코드',
    '센터명',
    '업체코드',
    '업체명',
    '연동사용여부',
    '등록자',
    '수정자'
  ]

  useEffect(() => {
    dataProvider = new LocalDataProvider(false)
    gridView = new GridView('realgrid')
    gridView.setDataSource(dataProvider)

    dataProvider.setFields(fields)
    gridView.setColumns(columns)
    dataProvider.setRows(rows)
    gridView.displayOptions.emptyMessage = '표시할 데이타가 없습니다.'
    gridView.displayOptions.rowHeight = 36
    gridView.header.height = 100
    gridView.footer.height = 40
    gridView.stateBar.width = 16
    gridView.setEditOptions({
      insertable: true,
      appendable: true
    })

    // @ts-ignore
    gridView.onCellClicked = function (_grid: GridView, clickData: ClickData) {
      if (clickData && clickData.cellType === 'header' && clickData.subType) {
        onOpen()
      }
    }

    if (layout) {
      // @ts-ignore
      gridView.setColumnLayout(layout)
    }

    gridView.setColumnProperty('연동사이트설정ID', 'autoFilter', true)
  }, [gridView])

  const addRow = () => {
    if (dataProvider) {
      const value = [
        '3020014435',
        '샤방넷',
        '-',
        'OP01',
        '광주오포',
        '광주오포',
        '광주오포',
        '광주오포',
        '윤영국',
        '윤영국',
        '윤영국'
      ]
      dataProvider.addRow(value)
    }
  }

  const removeRow = () => {
    if (gridView && dataProvider) {
      const checkRows = gridView.getCheckedRows()

      checkRows.map((row) => {
        if (dataProvider) {
          dataProvider.removeRow(row)
        }
      })
    }
  }

  //1. 핀포인트?

  //yarn dev// start

  const onClickExcel = () => {
    if (gridView) {
      gridView.exportGrid({
        type: 'excel',
        target: 'local',
        fileName: 'gridExportSample.xlsx',
        showProgress: true,
        progressMessage: '엑셀 Export중입니다.',
        indicator: 'visible',
        header: 'EXCEL',
        done: function () {
          //내보내기 완료 후 실행되는 함수
          alert('done excel export')
        }
      })
    }
  }

  const fixOptions = () => {
    if (gridView) {
      gridView.setFixedOptions({
        colCount: 2
      })
    }
  }

  const gridSearch = () => {
    if (dataProvider && gridView) {
      const fields = dataProvider.getOrgFieldNames()

      if (gridView.getCurrent() && searchRef.current) {
        const fieldIdx = gridView.getCurrent().fieldName
        // @ts-ignore
        const startFieldIndex = fields.indexOf(fieldIdx) + 1
        const options = {
          fields: fields,
          value: searchRef.current.value,
          startIndex: gridView.getCurrent().itemIndex,
          startFieldIndex: startFieldIndex,
          wrap: true,
          caseSensitive: false,
          partialMatch: true
        }

        const index = gridView.searchCell(options)
        gridView.setCurrent(index)
        gridView.setFocus()
      }
    }
  }

  return (
    <>
      <Table variant="simple">
        <Tbody>
          <Tr>
            <Td>
              <ButtonGroup variant="outline" spacing="3">
                <Button colorScheme="blue" onClick={onClickExcel}>
                  엑셀다운로드
                </Button>
                <Button onClick={addRow}>추가 </Button>
                <Button onClick={removeRow}>삭제 </Button>
                <Button onClick={fixOptions}>열고정 </Button>
                <Button onClick={gridSearch}>그리드내 검색 </Button>
                <input ref={searchRef}></input>
              </ButtonGroup>
            </Td>
          </Tr>
          <Tr>
            <Td>연동사이트목록</Td>
          </Tr>
          <Tr>
            <Td>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Stack>
                      <Flex justify="left" align="left">
                        <FormLabel htmlFor="sensitive-search">대소문자 구분?</FormLabel>
                        <Switch id="sensitive-search" size="lg" />
                      </Flex>

                      <Flex justify="left" align="left">
                        <FormLabel htmlFor="part-search">부분 일치?</FormLabel>
                        <Switch id="part-search" size="lg" />
                      </Flex>

                      <Input placeholder="input text" size="md" ref={searchRef} />
                    </Stack>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" onClick={gridSearch}>
                      검색
                    </Button>
                    <Button colorScheme="gray" mr={3} onClick={onClose}>
                      닫기
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <div id="realgrid" style={{ width: '100%', height: '400px' }} />
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <h1></h1>
    </>
  )
}

export default RealGrid
