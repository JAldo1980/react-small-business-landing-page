import {
  BronzePackage,
  SilverPackage,
  GoldPackage,
} from "./LinkedInPackageHtml"; // Import your package components

export default [
  {
    id: 1,
    headline: "LinkedIn Bronze",
    price: 50,
    text: "This is text for the Bronze package pricing headline. Here is where I will detail the offers etc.",
    html: <BronzePackage />,
    button: "https://www.linkedin.com/in/jamespalderman/",
    stock: 5,
  },
  {
    id: 2,
    headline: "LinkedIn Sliver",
    price: 100,
    text: "This is text for the Silver package pricing headline. Here is where I will detail the offers etc.",
    html: <SilverPackage />,
    button: "https://www.linkedin.com/in/jamespalderman/",
    stock: 5,
  },
  {
    id: 3,
    headline: "LinkedIn Gold",
    price: 150,
    text: "This is text for the Gold package pricing headline. Here is where I will detail the offers etc.",
    html: <GoldPackage />,
    button: "https://www.linkedin.com/in/jamespalderman/",
    stock: 5,
  },
];
