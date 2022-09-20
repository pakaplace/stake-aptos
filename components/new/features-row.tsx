import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, useColorModeValue } from '@chakra-ui/react';
import { FcOvertime, FcDonate, FcCheckmark } from 'react-icons/fc';

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
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={useColorModeValue("neutral.1000", "neutralD.1000")}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcOvertime} w={10} h={10} />}
          title={'Continuous Rewards Compounding'}
          text={
            'Stake your Aptos rewards daily instead of each period. We automatically roll your rewards into new validator nodes for ultimate capital efficiency.'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Daily Reward Payments'}
          text={
            'Receive rewards daily to your designated Aptos wallet.'
          }
        />
        <Feature
          icon={<Icon as={FcCheckmark} w={10} h={10} />}
          title={'Instant Liquidity'}
          text={
            'No lockup periods. Swap your liquid Aptos on a supported DEX.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}