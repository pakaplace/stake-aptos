import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import LoginCard from "@/components/new/login";

const Login = (props) => {
  return (
    <PageTransition>
      <Section>
        <LoginCard />
      </Section>
    </PageTransition>
  );
};
export default Login;
