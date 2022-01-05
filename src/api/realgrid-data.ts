import { ValueType } from 'realgrid'

export const columns = [
  {
    name: '연동사이트설정ID',
    fieldName: 'c1',
    type: 'data',
    width: '150',
    styles: {
      textAlignment: 'center'
    },
    header: {
      text: '연동사이트설정ID',
      showTooltip: true,
      tooltip: '<span style="color: red;">이름</span>',
      renderer: 'renderer_imgbtn'
    },
    renderer: {
      type: 'text',
      showTooltip: true
    }
  },
  {
    name: '연동사이트',
    fieldName: 'c2',
    type: 'data',
    width: '150',
    styles: {
      textAlignment: 'center'
    },
    header: {
      text: '연동사이트',
      showTooltip: false
    }
  },
  {
    name: '쇼핑몰명',
    fieldName: 'c3',
    type: 'data',
    width: '150',
    styles: {
      textAlignment: 'center'
    },
    header: '쇼핑몰명'
  },
  {
    name: '센터코드',
    fieldName: 'c4',
    type: 'data',
    width: '150',
    styles: {
      textAlignment: 'center'
    },
    header: {
      text: '센터코드',
      showTooltip: false
    },
    numberFormat: '0'
  },
  {
    name: '센터명',
    fieldName: 'c5',
    type: 'data',
    width: '150',
    styles: {
      textAlignment: 'center'
    },
    header: {
      text: '센터명',
      showTooltip: false
    }
  },
  {
    name: '업체코드',
    fieldName: 'c6',
    type: 'data',
    width: '150',
    styles: {
      textAlignment: 'center'
    },
    header: {
      text: '업체코드',
      showTooltip: false
    }
  },
  {
    name: '업체명',
    fieldName: 'c7',
    type: 'data',
    width: '150',
    styles: {
      textAlignment: 'center'
    },
    header: {
      text: '업체명',
      showTooltip: false
    }
  },
  {
    name: '연동사용여부',
    fieldName: 'c8',
    type: 'data',
    width: '150',
    styles: {
      textAlignment: 'center'
    },
    header: {
      text: '연동사용여부',
      showTooltip: false
    }
  },
  {
    name: '등록자',
    fieldName: 'c9',
    type: 'data',
    width: '150',
    styles: {
      textAlignment: 'center'
    },
    header: {
      text: '등록자',
      showTooltip: false
    }
  },
  {
    name: '수정자',
    fieldName: 'c10',
    type: 'data',
    width: '150',
    styles: {
      textAlignment: 'center'
    },
    header: {
      text: '수정자',
      showTooltip: false
    }
  },
  {
    name: 'SSG연동담당자',
    fieldName: 'c11',
    type: 'data',
    width: '150',
    styles: {
      textAlignment: 'center'
    },
    header: {
      text: '연동사용여부',
      showTooltip: false
    }
  }
]

export const fields = columns.map((col, index) => {
  return {
    fieldName: `c${index + 1}`,
    dataType: ValueType.TEXT
  }
})

export const rows = [
  {
    c1: '3020014434',
    c2: '샤방넷',
    c3: '-',
    c4: 'OP01',
    c5: '광주오포',
    c6: '광주오포',
    c7: '광주오포',
    c8: '광주오포',
    c9: '윤영국',
    c10: '윤영국',
    c11: '윤영국'
  },
  {
    c1: '3020014431',
    c2: '스마트스토어',
    c3: '지지스튜디오',
    c4: 'OP01',
    c5: '광주오포',
    c6: '광주오포',
    c7: '광주오포',
    c8: '광주오포',
    c9: '윤영국',
    c10: '윤영국',
    c11: '윤영국'
  },
  {
    c1: '3020014432',
    c2: '스마트스토어',
    c3: '알트스페이스',
    c4: 'OP01',
    c5: '인천신흥',
    c6: '광주오포',
    c7: '광주오포',
    c8: '광주오포',
    c9: '윤영국',
    c10: '윤영국',
    c11: '윤영국'
  },
  {
    c1: '3020014433',
    c2: 'SSG',
    c3: '-',
    c4: 'OP01',
    c5: '광주오포',
    c6: '광주오포',
    c7: '광주오포',
    c8: '광주오포',
    c9: '윤영국',
    c10: '윤영국',
    c11: '윤영국'
  },
  {
    c1: '3020014435',
    c2: '샤방넷',
    c3: '-',
    c4: 'OP01',
    c5: '광주오포',
    c6: '광주오포',
    c7: '광주오포',
    c8: '광주오포',
    c9: '윤영국',
    c10: '윤영국',
    c11: '윤영국'
  }
]
