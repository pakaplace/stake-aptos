import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import EnableOtpCard from "@/components/new/otp";

const EnableOtp = (props) => {
  return (
    <PageTransition>
      <Section>
        <EnableOtpCard />
      </Section>
    </PageTransition>
  );
};
export default EnableOtp;
