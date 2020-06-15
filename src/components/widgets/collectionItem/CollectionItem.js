import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

class CollectionItem extends Component {

  render() {
    const { img_url, isbn, book_title, course, date } = this.props.collection;
    return (
      <div style={{ padding: 10, marginTop: -50, marginBottom: 50 }}>
        <Card>
          <CardMedia
            style={{ paddingTop: "40%" }}
            image={img_url}
            title={book_title}
            isbn={isbn}
          />
          <CardContent>
            <Typography
              style={{ color: "rgb(10, 120, 163)",fontWeight:'normal' }}
              gutterBottom
              variant="h6"
              component="h3"
            >
              {book_title}
            </Typography>
            <Typography component="p">ISBN:{isbn}</Typography>
            <Typography component="p">Course:{course}</Typography>
            <Typography component="p">Submitted:{date}</Typography>
            <br />
            <select style={{color:'rgb(10, 120, 163)'}}>
              <option value="preview">Preview</option>
              <option value="edit">Edit</option>
              <option value="delete">Delete</option>
            </select> 
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default CollectionItem;
