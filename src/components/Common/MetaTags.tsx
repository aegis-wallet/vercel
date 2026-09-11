import { Helmet } from "react-helmet-async";

interface MetaTagsProps {
  title?: string;
  description?: string;
}

const MetaTags = ({
  title = "Aegis Wallet",
  description = "Aegis Wallet is a social network for the open web"
}: MetaTagsProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta content={description} name="description" />}
    </Helmet>
  );
};

export default MetaTags;
