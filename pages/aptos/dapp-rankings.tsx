import React from "react";
import Head from "next/head";
import {
  Box,
  VStack,
  Heading,
  Text
} from "@chakra-ui/react";
import Section from "@/components/section";
import Table from "@/components/new/table-expandable"

const Home = () => (
    <Box>
      <VStack spacing={12}>
          <Section>
              <Heading>Aptos Dapp Rankings</Heading>
              <Table/>
          </Section>
      </VStack>
    </Box>
)
export default Home
        