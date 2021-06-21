import { Auth0Provider, withAuth0 } from "@auth0/auth0-react";
import { faCoffee, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import { Button, Col, Nav, Row, Spinner, Tab } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Lecture } from "../model/lecture";
import { AddLecture, GetAllLectures, GetLecture } from "../util/lectureHelper";


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
        this.addToLecture = this.addToLecture.bind(this);
        this.initLectures = this.initLectures.bind(this);
        this.initLectures();
    }

    async initLectures() {
        var lectures = await GetAllLectures()
        console.log(lectures)
        this.setState({ lectures: lectures, loading: false })
    }

    async addToLecture(index: number) {
        var lectures = await GetAllLectures()
        this.setState({ lectures: lectures, loading: false })

        var targetLecture = lectures[index];
        // rewrite participants if somebody joined while editing
        var newLecture = await GetLecture(targetLecture.name + ".json");
        if (newLecture != null) {
            targetLecture.registeredParticipans = newLecture.registeredParticipans;
        }

        if (!targetLecture.registeredParticipans.some(x => x == this.props.auth0.user.email)) {
            targetLecture.registeredParticipans.push(this.props.auth0.user.email)
        }


        await AddLecture(targetLecture);
        await this.initLectures();

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

                            var amIInThisLecture = lecture.registeredParticipans.some(x => x == this.props.auth0.user.email)

                            return (
                                <Tab.Pane eventKey={lecture.name + i} key={lecture.name + i}>
                                    Název lekce: <b>{lecture.name}</b>
                                    <br />
                                    Popis: {lecture.description}
                                    <br />
                                    Kapacita lekce: {lecture.recommendedParticipans}
                                    <br />
                                    Registrovaných účastníků: {lecture.registeredParticipans.length}
                                    <br />
                                    {
                                        amIInThisLecture ? <Button disabled variant="success" >Již rezervováno!</Button> : <Button onClick={() => { this.addToLecture(i) }}>Zapsat se!</Button>
                                    }

                                </Tab.Pane>
                            )
                        })}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>


        if (this.state.loading) { textBoxContent = <Spinner animation={"border"}></Spinner> }
        if (this.props.auth0.isAuthenticated) {
            return (
                <div className="textBox">
                    <Row>
                        <Col md={4}><b>Seznam lekcí</b></Col>
                        <Col md={3}><Button onClick={this.initLectures} ><FontAwesomeIcon icon={faSyncAlt} /></Button></Col>
                    </Row>

                    {textBoxContent}
                </div>
            )
        }
        return <Redirect to="/" />;
    }
}

export default withAuth0(LecturesRoster)
