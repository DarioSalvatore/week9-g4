import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

/*8c87943c*/

class MyGallery extends Component {
  state = {
    HarryPotter: [],
  };

  CallFirst = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=8c87943c&s=harry%20potter"
      );
      if (response.ok) {
        const responseData = await response.json();
        this.setState({
          HarryPotter: responseData.Search,
        });
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  componentDidMount() {
    this.CallFirst();
  }

  render() {
    return (
      <Row sm={1} md={2} lg={3} xl={4} style={{ marginBottom: "30px" }}>
        {this.state.HarryPotter.slice(0, 4).map((film) => {
          return (
            <Col key={film.imdbID}>
              <Card style={{ width: "15rem", backgroundColor: "none" }}>
                <Card.Img variant="top" src={film.Poster} />
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default MyGallery;
