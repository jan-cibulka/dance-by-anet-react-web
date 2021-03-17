import { withAuth0 } from "@auth0/auth0-react";
import { initialAuthState } from "@auth0/auth0-react/dist/auth-state";
import React from "react"
import { Col, Nav, Row, Spinner, Tab } from "react-bootstrap";
import { Lecture } from "../model/lecture";
import { GetAllLectures } from "../util/lectureHelper";


export interface LectureRosterState {
    loading: boolean,
    lectures: Lecture[]
}

export interface LectureRosterProps {
    auth0: any
}

export class LecturesRoster extends React.Component<LectureRosterProps, LectureRosterState> {

    constructor(props: LectureRosterProps) {
        super(props);

        this.state = { lectures: [], loading: true }
        this.initLectures = this.initLectures.bind(this);
        this.initLectures();
    }

    async initLectures() {
        var lectures = await GetAllLectures()
        console.log(lectures);

        this.setState({ lectures: lectures, loading: false })
    }


    render(): JSX.Element {
        var textBoxContent = <Tab.Container id="left-tabs-example" defaultActiveKey="first">
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
                            {this.state.lectures.length}
                </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>


        if (this.state.loading) { textBoxContent = <Spinner animation={"border"}></Spinner> }

        return (
            <div className="textBox">

                <p><b>Seznam lekcí</b></p>
                {textBoxContent}
            </div>
        )
    }
}

export default withAuth0(LecturesRoster)
