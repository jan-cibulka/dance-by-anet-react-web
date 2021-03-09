import React from "react"
import aneta from "../images/aneta.jpg"
export class Instructor extends React.Component {
  render(): JSX.Element {
    return (

      <div className="textBox">
        <img src={aneta} style={{ float: "left", marginRight: 20, width: 300 }} alt="Aneta Mašátová" />
        <p><b>Aneta Mašátová</b></p>
        <p>Tanci se věnuji již od 3 let. Byla jsem součástí plzeňských závodních týmů. Za tu dobu jsem měla možnost vyzkoušet si spoustu tanečních stylů,
        jako například disco dance, latina, moderna, contenporary, street dance a hip hop. V posledních letech se věnuji převážně tanečnímu stylu
        Dancehall, který vychází z jamajské kultury. Součástí Dancehallu je již známý Twerk, kterému se věnuji cca 5 let, kdy jsem tancovala za
              plzeňskou vystupující skupinu.</p>
        <p>Ohledně trenérských služeb nabízím kromě svých lekcí také choreografii maturitních předtančení, různá taneční vystoupení a individuální
            tréninky a poradenství v oblasti tance a flexibility.</p>
      </div>
    )
  }
}

export default Instructor
