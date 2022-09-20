import React from "react";
import Head from "next/head";
import {
  Box,
  VStack,
  Heading
} from "@chakra-ui/react";
import Section from "@/components/section";

const Home = () => (
    <Box>
      <VStack spacing={12}>
            <Section>
                <Heading>Wallet on Aptos. Chrome extensions, iOS, and Android Apps</Heading>
            </Section>
        </VStack>
    </Box>
)
export default Home
        