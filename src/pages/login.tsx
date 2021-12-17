import { Box, Button, Heading, HStack, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
import { Card } from "../components/Card";
import { Link } from "../components/Link";
import { LoginForm } from "../components/LoginForm";

const Login = () => (
	<Box bg={useColorModeValue("gray.50", "inherit")} minH="100vh" py="12" px={{ base: "4", lg: "8" }}>
		<Box maxW="md" mx="auto">
			<Heading textAlign="center" size="xl" fontWeight="extrabold">
				SSG 풀필먼트 시스템
			</Heading>
			<Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
				Sign in to your account
			</Text>
			<Card>
				<LoginForm />
				<Stack mt="3" spacing="6">
					<HStack spacing="6" justify="flex-end">
						<Link fontSize="sm" textAlign="center" color={useColorModeValue("gray.600", "gray.400")} textDecoration="underline">
							비밀번호찾기
						</Link>
						<Link fontSize="sm" textAlign="center" color={useColorModeValue("gray.600", "gray.400")} textDecoration="underline">
							휴대폰번호 변경신청
						</Link>
					</HStack>
					<Button color="currentColor" size="lg" fontSize="md" variant="outline">
						Sign up
					</Button>
				</Stack>
			</Card>
		</Box>
	</Box>
);

export default Login;
