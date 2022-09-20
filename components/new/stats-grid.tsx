import { ReactNode } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react';

export default function StatsGrid() {
  return (
    <Box  position={'relative'}>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20}}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                Pricing
              </Text>
              <Heading
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                Low Commission, High Uptime
              </Heading>
              <Text fontSize={'xl'} color={useColorModeValue("neutral.1000", "neutralD.1000")}>
                The more you earn, the more we earn. We take a 5% commission of your rewards for managing your nodes. Revenue-share incentivizes us to maximize your rewards. StakeAptos.com performs in the top 5% of all validators. 
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={useColorModeValue("neutral.1000", "neutralD.1000")}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700}>
    {children}
  </Text>
);

const stats = [
  {
    title: 'Top 5',
    content: (
      <>
        <StatsText>AIT-3 Validator Ranking</StatsText>
      </>
    ),
  },
  {
    title: '10+',
    content: (
      <>
        <StatsText>Nodes</StatsText> managed
      </>
    ),
  },
  {
    title: '>99%%',
    content: (
      <>
        <StatsText>Performer</StatsText> benchmarked against all nodes
      </>
    ),
  },

];