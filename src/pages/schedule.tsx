import React from "react"
import { OverlayTrigger, Popover, Table } from "react-bootstrap"

const Schedule = () => {
  return (
    <div className="textBox">
      <p>Tréninky probíhají v učebně A18, Krašovská Aktivity centrum, Krašovská 30, Plzeň</p>
      <p>Cena jedné lekce je 100 Kč.</p>
      <p>Kredit na účet k dobití na lekci u trenéra.</p>
      <Table className="border border-dark">
        <thead>
          <tr>
            <th ></th>
            <th>13:00</th>
            <th>14:00</th>
            <th>15:00</th>
            <th>16:00</th>
            <th>17:00</th>
            <th>18:00</th>
            <th>19:00</th>

            <th>20:00</th>


          </tr>
        </thead>
        <tbody>
          <tr>
            <td ><b>Pondělí</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

            <OverlayTrigger trigger="hover" placement="top" overlay={<Popover id="popover-basic">
              <Popover.Title as="h3">Popover right</Popover.Title>
              <Popover.Content>
                Tady bude <strong>zajímavý</strong> popisek lekce.
              </Popover.Content>
            </Popover>}>

              <td className={"schedule-highlight"}>  <b>Ladies Dance</b></td>
            </OverlayTrigger>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><b>Úterý</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><b>Středa</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className={"schedule-highlight"}><b>Charge Dance</b></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><b>Čtvrtek</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><b>Pátek</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}


export default Schedule
