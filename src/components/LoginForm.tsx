import { Button, chakra, FormControl, FormLabel, HTMLChakraProps, Input, Stack } from "@chakra-ui/react";
import * as React from "react";
import { PasswordField } from "./PasswordField";

export const LoginForm = (props: HTMLChakraProps<"form">) => (
	<chakra.form
		onSubmit={(e) => {
			e.preventDefault();
			// your login logic here
		}}
		{...props}
	>
		<Stack spacing="6">
			<FormControl id="id">
				<FormLabel>ID</FormLabel>
				<Input name="id" type="text" required />
			</FormControl>
			<PasswordField />
			<Button type="submit" colorScheme="blue" size="lg" fontSize="md">
				Sign in
			</Button>
		</Stack>
	</chakra.form>
);
