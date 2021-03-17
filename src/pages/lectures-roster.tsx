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
        var textBoxContent = <Tab.Container id="left-tabs-example" defaultActiveKey={"default"}>
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        {this.state.lectures.map((lecture, i) => {
                            return (
                                <Nav.Item>
                                    <Nav.Link eventKey={lecture.name + i} key={lecture.name + i}>{lecture.name}</Nav.Link>
                                </Nav.Item>
                            )
                        })}
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey={"default"}>
                            Vyberte lekci
                            </Tab.Pane>
                        {this.state.lectures.map((lecture, i) => {
                            return (
                                <Tab.Pane eventKey={lecture.name + i} key={lecture.name + i}>
                                    Název lekce: <b>{lecture.name}</b>
                                    <br/>
                                    Popis: {lecture.description}
                                    <br/>
                                    Kapacita lekce: {lecture.recommendedParticipans}
                                    <br/> 
                                    Registrovaných účastníků: {lecture.registeredParticipans.length}                                   
                                    <br/>
                                </Tab.Pane>
                            )
                        })}
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
