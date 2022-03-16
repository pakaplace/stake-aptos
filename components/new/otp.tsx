import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  Image,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { useAuth } from "../../contexts/useAuth";

export default function SignupCard() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const code = useRef({});
  code.current = watch("code", "");
  console.log("current code ref", errors, code.current);

  function onSubmit(values) {
    console.log("Submitted values", values);
  }

  return (
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
      <VStack textAlign={"center"} align={"center"}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Enable 2FA
        </Heading>
        {/* <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text> */}
      </VStack>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormControl
              display={"flex"}
              flexDirection="column"
              alignItems="center"
              id="otp"
              isInvalid={errors.otp}
              isRequired
            >
              <Image
                p={4}
                src="data:image/png;base64,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"
              />
              <FormLabel>Verify 2FA Code</FormLabel>
              <InputGroup>
                <Input
                  name="otp"
                  type={"number"}
                  placeholder={"Enter 6 digit 2FA code"}
                  {...register("otp", {
                    required: "This is required",
                    minLength: {
                      value: 6,
                      message: "Enter a 6 digit code",
                    },
                    maxLength: {
                      value: 6,
                      message: "Enter a 6 digit code",
                    },
                  })}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.otp && errors.otp.message}
                {errors.password && errors.password.validation}
              </FormErrorMessage>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                type="submit"
                _hover={{
                  bg: "blue.500",
                }}
              >
                Continue
              </Button>
            </Stack>
            {/* <Stack pt={6}>
                <Text align={"center"}>
                  Not signed up a user?{" "}
                  <Link color={"blue.400"} href="/login">
                    Login
                  </Link>
                </Text>
              </Stack> */}
          </Stack>
        </form>
      </Box>
    </Stack>
  );
}
