import React from "react";
import Head from "next/head";
import {
  Button,
  Box,
  VStack,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import { TwitterLogo } from "phosphor-react";
import ProjectCard from "@/components/project-card";
// import { getTable } from "@/lib/airtable";
import Link from "@/components/link";
import Hero from "@/components/new/hero";
import StatsGrid from "@/components/new/stats-grid";
import FeaturesRow from "@/components/new/features-row";
import FeaturesList from "@/components/new/features-list";
import SubscribeCard from "@/components/subscribe-card";
import Faq from "@/components/new/faq";

const Home = () => (
  <Box>
    <PageTransition>
      <VStack spacing={12}>
        <Section>
          <Hero/>
          <FeaturesRow/>
          <FeaturesList/>
          <StatsGrid/>
          <Faq/>
          {/*
          <VStack spacing={4} align="start" fontSize="2xl">
            <Heading size="xl">Pocket Staking Pool 👋</Heading>
            <VStack>
              <Text>
                I'm a designer, developer and entrepreneur of sorts. Born and
                raised in Germany and now living in the Netherlands. The focus
                of my work is the{" "}
                <Link variant="text" href="https://www.facilitator.school">
                  Facilitator School
                </Link>
                . In my spare time, I work on{" "}
                <Link variant="text" href="https://markway.io">
                  Markway
                </Link>
                . I also hang out on{" "}
                <Link variant="text" href="https://twitter.com/wirtzdan">
                  Twitter
                </Link>{" "}
                and{" "}
                <Link
                  variant="text"
                  href="https://www.linkedin.com/in/wirtzdan/"
                >
                  LinkedIn
                </Link>
                , where I learn, think and work in public.
              </Text>
            </VStack>
             <Link href="https://twitter.com/wirtzdan" unstyled>
              <Button
                colorScheme="blue"
                rounded="lg"
                size="lg"
                leftIcon={<TwitterLogo weight="fill" />}
                mt={4}
              >
                Follow me on Twitter
              </Button>
            </Link> 
          </VStack>*/}
        </Section>
        {/* <Section>
          <SubscribeCard
            title="Subscribe to our newsletter"
            description="Helpful tips to maximize your pocket rewards, from our desk to yours"
          />
        </Section> */}

        {/* <Section>
          <VStack align="start" spacing={8}>
            <Heading size="lg">Projects</Heading>
            <SimpleGrid columns={1} spacing={4} mt={8} w="100%">
              {projects.map((projects) => (
                <ProjectCard
                  key={projects.id}
                  name={projects.fields.name}
                  description={projects.fields.description}
                  logo={projects.fields.logo}
                  link={projects.fields.link}
                  type={projects.fields.type}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </Section> */}
      </VStack>
    </PageTransition>
  </Box>
);

// export async function getStaticProps() {
//   const projects = await getTable("Projects");

//   return {
//     props: {
//       projects,
//     },
//     revalidate: 600,
//   };
// }

export default Home;

