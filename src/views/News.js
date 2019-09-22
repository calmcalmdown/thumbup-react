import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Col, Row, Container} from "reactstrap";
import {dataSelector} from "../modules/app";

const mapStateToProps = state => {
  return {
    data: dataSelector(state),
    pageNo: state.move.pageNo,
  };
};

const enhance = connect(mapStateToProps);
class News extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {data} = this.props;
    return (
      <section id="news">
        <Container>
          <h2>news</h2>
          {data.newsItems.map((item, index) => {
            return (
              <Row className="news-item" key={index}>
                <Col md="6" sm="12">
                  <img src={item.img} alt="" />
                </Col>
                <Col md="6" sm="12" className="text-center">
                  <div className="title">{item.title}</div>
                  <div className="content">{item.content}</div>
                  <div className="read-more">
                    <Button color="dark" outline className="btn-pill read-more">
                      Read More
                    </Button>
                  </div>
                </Col>
              </Row>
            );
          })}
        </Container>
      </section>
        
    )
  }
}
export default enhance(News);
