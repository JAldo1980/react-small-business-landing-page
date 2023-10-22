import {
  BronzeWebPackage,
  GoldWebPackage,
  SilverWebPackage,
} from "./WebsitePackageHtml";

export default [
  {
    id: 1,
    headline: "Website Bronze",
    price: 50,
    text: "This is text for the Bronze package pricing headline. Here is where I will detail the offers etc.",
    html: <BronzeWebPackage />,
    button: "https://www.linkedin.com/in/jamespalderman/",
    stock: 5,
  },
  {
    id: 2,
    headline: "Website Sliver",
    price: 100,
    text: "This is text for the Silver package pricing headline. Here is where I will detail the offers etc.",
    html: <SilverWebPackage />,
    button: "https://www.linkedin.com/in/jamespalderman/",
    stock: 2,
  },
  {
    id: 3,
    headline: "Website Gold",
    price: 150,
    text: "This is text for the Gold package pricing headline. Here is where I will detail the offers etc.",
    html: <GoldWebPackage />,
    button: "https://www.linkedin.com/in/jamespalderman/",
    stock: 11,
  },
];
