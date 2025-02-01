'use client'

import Card from "./card/page";
import Bannercard from "./component/bannercard";
import Emailbox from "./component/emailbox";
import Flexbanner from "./component/flexbanner";
import Mainbanner from "./component/mainbanner";




export default function Home() {

  


  return (
      <>
      <Mainbanner/>
      <Bannercard/>
      <Card/>
      <Flexbanner/>
      <Emailbox/>
      </>
      
      
  );
}
