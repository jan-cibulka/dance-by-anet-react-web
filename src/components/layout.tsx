/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"


import Header from "./header"
import { CustomNavbar } from "./navbar";



import backgroundImageWide from "../images/pozadi2_low.jpg";
import backgroundImageTall from "../images/pozadi3.jpg";

export interface LayoutProps {
  children: any
}

export interface LayoutState {
  shouldBeWideBackground: boolean;
}



export class Layout extends React.Component<{}, LayoutState> {
  wideTreshhold = 650;
  constructor(props: any) {
    super(props);


    this.state = { shouldBeWideBackground: true };
    //console.log(this.state);
    this.updateBackgroundImage = this.updateBackgroundImage.bind(this);
  }

  render(): JSX.Element {
    return (
      <React.Fragment>

        <meta charSet="utf-8" />
        <title>Dance by Anet</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=block');
        </style>



        <div
          className="content-wrapper"
          style={{
            backgroundColor: "gray",
            backgroundImage: `url(${this.state.shouldBeWideBackground ? backgroundImageWide : backgroundImageTall})`,
            minHeight:800,
            overflow:"auto"

          }}
        >
          <Header siteTitle={`DanceByAnet`} />
          <CustomNavbar />
          {this.props.children}
        </div>


      </React.Fragment>
    )
  }
  updateBackgroundImage = () => {

    if (window.innerWidth > this.wideTreshhold && this.state.shouldBeWideBackground == false) {
      this.setState({ shouldBeWideBackground: true });
    }

    if (window.innerWidth < this.wideTreshhold && this.state.shouldBeWideBackground == true) {
      this.setState({ shouldBeWideBackground: false });
    }

  };
  componentDidMount() {
    window.addEventListener('resize', this.updateBackgroundImage);
    this.updateBackgroundImage();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateBackgroundImage);
  }

}

export default Layout;
