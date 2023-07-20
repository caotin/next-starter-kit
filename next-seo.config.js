/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: 'Next starter | Title',
  titleTemplate: '%s | Next starter',
  defaultTitle: 'Next starter',
  description: 'Next starter | Title',
  canonical: 'https://nextarter-chakra.sznm.dev',
  openGraph: {
    url: 'https://nextarter-chakra.sznm.dev',
    title: 'Next starter',
    description: 'Next.js + chakra-ui + TypeScript template',
    images: [
      // {
      //   url: "https://og-image.sznm.dev/**free-merchandise**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
      //   alt: "free-merchandise.sznm.dev og-image",
      // },
    ],
    site_name: 'free-merchandise',
  },
  // twitter: {
  //   handle: "@sozonome",
  //   cardType: "summary_large_image",
  // },
};

export default defaultSEOConfig;
