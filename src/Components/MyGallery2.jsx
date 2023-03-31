import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class MyGallery2 extends Component {
  state = {
    Pokemon: [],
  };

  CallThird = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=8c87943c&s=pokemon"
      );
      if (response.ok) {
        const responseData = await response.json();
        this.setState({
          Pokemon: responseData.Search,
        });
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  componentDidMount() {
    this.CallThird();
  }

  render() {
    return (
      <Row sm={1} md={2} lg={3} xl={4} style={{ marginBottom: "30px" }}>
        {this.state.Pokemon.slice(0, 4).map((film) => {
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

export default MyGallery2;
