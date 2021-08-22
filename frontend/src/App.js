import './App.css';
import NavBar from './components/NavBar.js';
import React from 'react';
import Cover from './components/Cover';
import QCardSection from './components/QCardSection.js';
import QCardSection2 from './components/QCardSection2.js';



const howItWorks = [
  {
    title: "Sign up and create your account",
    description: "This helps you place your documents in a safe secure hosting area"
  },
  {
    title: "Upload all your manuals/documents",
    description: "Our simple uploader will make your life easy. Upload multiple items in one"
  },
  {
    title: "Use the generator to create and print your QR code",
    description: "Generate your QR code right away using the generator. Scan it on your phone to test it"
  },
  {
    title: "Place your QR code on your products/locations",
    description: "Print multiple codes in a single piece of paper. One paper for more than a dozen manuals or copies of it."
  },
  {
    title: "Your customers scan the code",
    description: "Scan and Go to read the document, smart and easy right on the phone"
  },
  {
    title: "Landing page opens up with your hosted documents",
    description: "As soon as they scan the code the landing page opens on a browser window with either a PDF download or a landing page"
  }
];

const WhyUs = [
  {
    Qheading2: "Why Us?",
    title1: "Artificial Intelligence (AI) based OCR system",
    description1: "Allows you to scan your paper based manuals to convert them into downloadable PDFs or convert them into text documents that can be scanned by your clients",
    picture1: "./whyusphoto.jpg",
    title2: "Print your QR codes directly from the system",
    description2: "The system has multiple document uploading handlers that allows you to simply upload and generate QR codes immediately both as a shareable file as well as ready to print image",
    },
];



function App() {
  return (
    <div>
      <NavBar logo="./logo1.png" label1="Home" label2= "Why Us"label3="How it works"label4="Pricing"
      btnlabel1="Sign Up"
      btnlabel2="Login"/>
       <br/><br/>
      <Cover covertitle="Go Paperless! Go QR!" coverdescription="The QR revolution is here. No more paper manuals no more hunting for them! Simply scan and scroll! Save the environment while you're at it!" getstartedbtn="Get Started"/>
      <QCardSection content={howItWorks}/>      
      <QCardSection2 content={WhyUs}/>
    </div>
  );
}

export default App;