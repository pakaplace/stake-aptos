import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import SignupCard from "@/components/new/signup";

const Login = (props) => {
  return (
    <PageTransition>
      <Section>
        <SignupCard />
      </Section>
    </PageTransition>
  );
};
export default Login;
