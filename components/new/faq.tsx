import {
  Box,
  Container,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiSearch, FiMinus, FiPlus } from "react-icons/fi";

const Faq = () => (
  <Box as="section" bg="bg-surface" py={{ base: "16", md: "24" }}>
    <Container>
      <Stack spacing={{ base: "8", md: "10" }} align="center">
        <Stack spacing={{ base: "4", md: "6" }} textAlign="center">
          <Stack spacing="3">
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="medium"
              color="accent"
            >
              Knowledge Center
            </Text>
            <Heading
              size={useBreakpointValue({ base: "md", md: "lg" })}
              fontWeight="semibold"
            >
              Frequently Asked Questions
            </Heading>
          </Stack>
          {/* <Text color="muted" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl">
              How can we help you?
            </Text> */}
        </Stack>
        {/* <InputGroup size="lg" maxW={{ md: 'sm' }}>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} boxSize="5" color="muted" />
            </InputLeftElement>
            <Input placeholder="Search" />
          </InputGroup> */}
        <Accordion
          defaultIndex={[0, 1, 2, 3, 4, 5]}
          allowMultiple
          w={["sm", "md", "3xl"]}
        >
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                {" "}
                <h2 style={{ flex: "1", width: "100%" }}>
                  <AccordionButton flex="1">
                    <Box flex="1" fontSize="24px" textAlign="left">
                      What Annual Percentage Yield does Aptos staking give?
                    </Box>
                    {isExpanded ? (
                      <Icon as={FiMinus} fontSize="12px" />
                    ) : (
                      <Icon as={FiPlus} fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="gray.500">
                  Aptos APY is expected to be about 7% per year.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                {" "}
                <h2 style={{ flex: "1", width: "100%" }}>
                  <AccordionButton flex="1">
                    <Box flex="1" textAlign="left" fontSize="24px">
                      Is Aptos blockchain decentralized?
                    </Box>
                    {isExpanded ? (
                      <Icon as={FiMinus} fontSize="12px" />
                    ) : (
                      <Icon as={FiPlus} fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="gray.500">
                  Aptos is taking a phased approach to decentralization. At
                  network launch, Aptos is expected to be supported by 100
                  distributed validator nodes from several dozen partners.
                  Eventually Aptos will attract thousands of validators and
                  acheive 100K+ transactions per second.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                {" "}
                <h2 style={{ flex: "1", width: "100%" }}>
                  <AccordionButton flex="1">
                    <Box flex="1" textAlign="left" fontSize="24px">
                      What programming language is used for Aptos Smart
                      Contracts?
                    </Box>
                    {isExpanded ? (
                      <Icon as={FiMinus} fontSize="12px" />
                    ) : (
                      <Icon as={FiPlus} fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="gray.500">
                  Aptos uses{" "}
                  <a href="https://diem.github.io/move/introduction.html">
                    Move,
                  </a>{" "}
                  a language similar to Rust.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                {" "}
                <h2 style={{ flex: "1", width: "100%" }}>
                  <AccordionButton flex="1">
                    <Box flex="1" textAlign="left" fontSize="24px">
                      How does Staking and Delegation work on Aptos?
                    </Box>
                    {isExpanded ? (
                      <Icon as={FiMinus} fontSize="12px" />
                    ) : (
                      <Icon as={FiPlus} fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="gray.500">
                  Aptos validators (node-runners) can accept delegated Aptos
                  tokens from Aptos Holders, in exchange for a commission of the
                  earned rewards. The Aptos Holder (you) can keep custody and
                  voting power of your Aptos tokens.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          {/* <AccordionItem>
            {({ isExpanded }) => (
              <>
                {" "}
                <h2 style={{ flex: "1", width: "100%" }}>
                  <AccordionButton flex="1">
                    <Box flex="1" textAlign="left" fontSize="24px">
                      Where is the Aptos Tokeneconomics and Whitepaper?
                    </Box>
                    {isExpanded ? (
                      <Icon as={FiMinus} fontSize="12px" />
                    ) : (
                      <Icon as={FiPlus} fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="gray.500">
                  Aptos is currently evaluating different approaches to
                  tokenomics and will publish an update following incentivized
                  testnet experiments. Similarly, our white paper will encompass
                  the work we believe will be ready by Mainnet launch (expected
                  Q4 2022).
                </AccordionPanel>
              </>
            )}
          </AccordionItem> */}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                {" "}
                <h2 style={{ flex: "1", width: "100%" }}>
                  <AccordionButton flex="1">
                    <Box flex="1" textAlign="left" fontSize="24px">
                      Will there be an Aptos airdrop?
                    </Box>
                    {isExpanded ? (
                      <Icon as={FiMinus} fontSize="12px" />
                    ) : (
                      <Icon as={FiPlus} fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="gray.500">
                  Aptos offered a free testnet NFT for those who downloaded
                  their Petra wallet, but have not made any official
                  announcements of an airdrop.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Stack>
    </Container>
  </Box>
);
export default Faq;
