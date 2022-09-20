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
                <Heading>Aptos AIT-3 Staking Leaderboard</Heading>
            </Section>
        </VStack>
    </Box>
)
export default Home
        