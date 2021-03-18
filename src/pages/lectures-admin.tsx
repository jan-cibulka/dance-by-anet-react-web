import { withAuth0 } from "@auth0/auth0-react";
import { initialAuthState } from "@auth0/auth0-react/dist/auth-state";
import React from "react"
import { Button, Col, Form, ListGroup, Nav, Row, Spinner, Tab } from "react-bootstrap";
import { Lecture } from "../model/lecture";
import { GetAllLectures } from "../util/lectureHelper";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import lecturesRoster from "./lectures-roster";

export interface LectureAdminState {
    loading: boolean,
    lectures: Lecture[]
}

export interface LectureAdminProps {
    auth0: any
}

export class LecturesAdmin extends React.Component<LectureAdminProps, LectureAdminState> {


    constructor(props: LectureAdminProps) {
        super(props);

        this.state = { lectures: [], loading: true }

        this.initLectures = this.initLectures.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.initLectures();

    }

    async initLectures() {
        var lectures = await GetAllLectures()
        this.setState({ lectures: lectures, loading: false })
    }

    submitForm = (event: any) => {
        event.preventDefault();



        var name = event.target[0].value;
        var description = event.target[1].value;
        var recommendedParticipans = event.target[2].value;
        var date = event.target[3].value;
        var lecture: Lecture = {
            description: description,
            name: name,
            recommendedParticipans: recommendedParticipans,
            registeredParticipans: [],
            start: date
        };

        console.log(lecture);
    }


    render(): JSX.Element {
        var textBoxContent = <Tab.Container id="left-tabs-example" defaultActiveKey={"default"}>
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        {this.state.lectures.map((lecture, i) => {
                            return (
                                <Nav.Item key={i}>
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
                                    <Form onSubmit={this.submitForm} >
                                        <Form.Group controlId="formLectureName">
                                            <Form.Label>Název Lekce</Form.Label>
                                            <Form.Control placeholder="Název Lekce" defaultValue={lecture.name} />
                                        </Form.Group>
                                        <Form.Group controlId="formLectureDescription">
                                            <Form.Label>Popis Lekce</Form.Label>
                                            <Form.Control placeholder="Popis Lekce" defaultValue={lecture.description} />
                                        </Form.Group>
                                        <Form.Group controlId="formLectureDescription">
                                            <Form.Label>Doporučený počet lidí</Form.Label>
                                            <Form.Control type="number" placeholder="" defaultValue={lecture.recommendedParticipans} />
                                        </Form.Group>
                                        <Form.Group controlId="formLectureStart">
                                            <Form.Label>Začátek lekce</Form.Label>
                                            <Form.Control dateFormat={"dd.MM.yyyy HH:mm"} showTimeSelect timeIntervals={5} timeCaption="Od" disabled={false} timeFormat={"HH:mm "} as={DatePicker} selected={lecture.start ? new Date(parseInt(lecture.start)) : new Date()} onChange={(evt: any) => {
                                                var newDate = new Date(evt).getTime().toString();                                           
                                                var newLectures = [...this.state.lectures]
                                                newLectures[i].start = newDate;                                               
                                                this.setState({ lectures: newLectures })
                                        
                                            }} />
                                        </Form.Group>
                                        <Form.Group controlId="formLectureDescription">
                                            <Form.Label>Seznam přihlášených lidí</Form.Label>
                                            <ListGroup>
                                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                            </ListGroup>
                                        </Form.Group>
                                        <Button type="submit" >letsgo</Button>
                                    </Form>
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

export default withAuth0(LecturesAdmin)
