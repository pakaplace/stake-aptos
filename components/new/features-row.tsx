import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcOvertime, FcDonate, FcCheckmark } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={useColorModeValue("neutral.1000", "neutralD.1000")}>
        {text}
      </Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcOvertime} w={10} h={10} />}
          title={"Continuous Rewards Compounding"}
          text={
            "Compound your rewards or withdraw in one-click at the end of each unlock period (1 month)."
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"Staking Dashboard"}
          text={
            "Request your earned Aptos rewards at the end of each lockup period our dashboard. All you need is an Aptos wallet."
          }
        />
        <Feature
          icon={<Icon as={FcCheckmark} w={10} h={10} />}
          title={"Self Custody"}
          text={
            "Only you can withdraw or unlock your funds. Keep your Voting power or delegate it to us."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
