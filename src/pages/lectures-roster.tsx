import { withAuth0 } from "@auth0/auth0-react";
import React from "react"
import { Col, Nav, Row, Tab } from "react-bootstrap";

export class LecturesRoster extends React.Component<{auth0: any}> {
  render(): JSX.Element {
    console.log(this.props.auth0);
    return (

      <div className="textBox">
      
        <p><b>Seznam lekcí</b></p>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Lekce 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Lekce 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                               lekce 1
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              lekce 2
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
      </div>
    )
  }
}

export default withAuth0(LecturesRoster)
