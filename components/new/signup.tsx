import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
// import { signup, SignupUser } from "../../lib/users";
import { useAuth, SignupUser } from "../../contexts/useAuth";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const { signup } = useAuth();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");
  console.log("current", errors, password.current);

  function onSubmit(values: SignupUser) {
    console.log("VALUES", values);
    signup(values)
      .then((res) => console.log("signup response", res))
      .catch((e) => {
        console.error("Error signing up- ", e);
        window.alert(
          "Signup unsuccesful. Your email may have already been used."
        );
      });
  }
  return (
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
      <Stack align={"center"}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Sign up
        </Heading>
        {/* <Text fontSize={"lg"} color={"gray.600"}>
          to enjoy all of our cool features ✌️
        </Text> */}
      </Stack>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <HStack align="start" py={2}>
              <Box>
                <FormControl
                  id="first_name"
                  isInvalid={errors.first_name}
                  isRequired
                >
                  <FormLabel>First Name</FormLabel>
                  <Input
                    id="first_name"
                    type="text"
                    {...register("first_name", {
                      required: "This is required",
                      minLength: {
                        value: 2,
                        message: "Minimum length is 2 letters",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.first_name && errors.first_name.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box>
                <FormControl
                  id="last_name"
                  isInvalid={errors.last_name}
                  isRequired
                >
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    {...register("last_name", {
                      required: "This is required",
                      minLength: {
                        value: 2,
                        message: "Minimum length is 2 letters",
                      },
                    })}
                  />
                  <FormErrorMessage fontSize={"xs"}>
                    {errors.last_name && errors.last_name.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isInvalid={errors.email} isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                {...register("email", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={errors.password} isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "This is required",
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                      message:
                        "Password must have 1 symbol, 1 number, 1 uppercase letter",
                    },
                    minLength: {
                      value: 8,
                      message: "Minimum length is 8",
                    },
                  })}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    p={3}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.password && errors.password.message}
                {errors.password && errors.password.validation && "here"}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              id="repeatPassword"
              isInvalid={errors.repeatPassword}
              isRequired
            >
              <FormLabel>Repeat Password</FormLabel>
              <InputGroup>
                <Input
                  id="repeatPassword"
                  name="repeatPassword"
                  type={showPassword ? "text" : "password"}
                  {...register("repeatPassword", {
                    required: true,
                    validate: (value) => value === password.current,
                  })}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    p={3}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.repeatPassword &&
                  errors.repeatPassword.type &&
                  "Passwords must match"}
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
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} href="/login">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
}
