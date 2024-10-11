import PageContainer from "../../components/Common/Shared/page-container";
import ContactContent from "../../components/UI/Contact/contact-content";
import "./contact.css";

export const metadata = {
  title: "Philip Oyenola - Contact Me 🤙☎",
};

const ContactPage = () => {
  return (
    <>
      <main>
        <PageContainer>
          <ContactContent />
        </PageContainer>
      </main>
    </>
  );
};

export default ContactPage;
