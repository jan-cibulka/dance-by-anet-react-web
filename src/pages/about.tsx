import React from "react"
import { Button } from "react-bootstrap";
import { AddContainer, AddLecture, GetAllLectures, GetLecturesList } from "../util/lectureHelper";

export class About extends React.Component {
  render(): JSX.Element {
    return (   
        <div className="textBox">
           <Button onClick={GetLecturesList}>test</Button>
           <Button onClick={AddContainer}>test2</Button>
          <p>Pořádáme otevřené taneční lekce pro každého. Lekce na sebe nenavazují. Vhodné pro začátečníky. Trénink se přizpůsobuje schopnostem všech zúčastněních tanečníků.</p>
          <p>Díky tanci se naučíte pracovat se svým tělem a důvěřovat mu. Tanec je pro všechny, co se chtějí ladně pohybovat a zlepšit držení těla.
          </p>
          <p>Vše, co děláme, děláme pro vás s láskou k tanci a pohybu, proto se budeme těšit na každého, kdo k nám zavítá. Naším hlavním cílem je, aby každý odcházel z hodin spokojený, příjemně vyčerpaný a odreagovaný.
          </p>
          <p style={{ textAlign: "right" }}>Vaše Aneta Mašátová</p>            
             </div>    
          
    )
  }
}

export default About;
