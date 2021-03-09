
import React from 'react'

import { Col, Nav, Row, Tab } from 'react-bootstrap'

export class Video extends React.Component {
    render(): JSX.Element {
        return (<div className="textBox">
            <h2>Knihovna videí</h2>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Video 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Video 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <iframe src="https://player.vimeo.com/video/519900003" width="600" height="600" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <iframe src="https://player.vimeo.com/video/515022127" width="600" height="600" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            <br />

        </div>)
    }
}

export default Video;