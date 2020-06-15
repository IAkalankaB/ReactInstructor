import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import TitleIcon from "@material-ui/icons/Title";
import FolderIcon from "@material-ui/icons/Folder";
import DateRangeIcon from "@material-ui/icons/DateRange";
import BookIcon from "@material-ui/icons/Book";
import ImageIcon from "@material-ui/icons/Image";
import axios from "axios";
import Button from "@material-ui/core/Button";
import InfoIcon from '@material-ui/icons/Info';


class AddCollection extends Component {
  constructor() {
    super();
    this.state = {
      id:"",
      book_title: "",
      course: "",
      date: "",
      isbn: "",
      img_url: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    
    e.preventDefault();
    const newCollection = {
      id: this.state.id,
      book_title: this.state.book_title,
      course: this.state.course,
      date: this.state.date,
      isbn: this.state.isbn,
      img_url: this.state.img_url
    };
    const addCollection = async () => {
      await axios.post(
        "http://localhost:8080/api/collection/post",
        newCollection
      );
    };

    addCollection();
    window.location.reload();

  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <InputLabel htmlFor="input-with-icon-adornment">
            ID
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            name="id"
            value={this.state.id}
            onChange={this.onChange}
            style={{ padding: 12 }}
            startAdornment={
              <InputAdornment position="start">
                <InfoIcon />
              </InputAdornment>
            }
          />
          <br />
          <InputLabel htmlFor="input-with-icon-adornment">
            Book title
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            name="book_title"
            value={this.state.book_title}
            onChange={this.onChange}
            style={{ padding: 12 }}
            startAdornment={
              <InputAdornment position="start">
                <TitleIcon />
              </InputAdornment>
            }
          />
          <br />
          <InputLabel htmlFor="input-with-icon-adornment">Course</InputLabel>
          <Input
            id="input-with-icon-adornment"
            name="course"
            value={this.state.course}
            onChange={this.onChange}
            style={{ padding: 12 }}
            startAdornment={
              <InputAdornment position="start">
                <FolderIcon />
              </InputAdornment>
            }
          />
          <br />
          <InputLabel htmlFor="input-with-icon-adornment">Date</InputLabel>
          <Input
            id="input-with-icon-adornment"
            name="date"
            value={this.state.date}
            onChange={this.onChange}
            style={{ padding: 12 }}
            startAdornment={
              <InputAdornment position="start">
                <DateRangeIcon />
              </InputAdornment>
            }
          />
          <br />
          <InputLabel htmlFor="input-with-icon-adornment">ISBN</InputLabel>
          <Input
            id="input-with-icon-adornment"
            name="isbn"
            value={this.state.isbn}
            onChange={this.onChange}
            style={{ padding: 12 }}
            startAdornment={
              <InputAdornment position="start">
                <BookIcon />
              </InputAdornment>
            }
          />
          <br />
          <InputLabel htmlFor="input-with-icon-adornment">Image</InputLabel>
          <Input
            id="input-with-icon-adornment"
            name="img_url"
            value={this.state.img_url}
            onChange={this.onChange}
            style={{ padding: 12 }}
            startAdornment={
              <InputAdornment position="start">
                <ImageIcon />
              </InputAdornment>
            }
          />
          <br />
          <Button
            style={{
              marginLeft: 12,
              marginTop: 30,
              color: "white",
              backgroundColor: "rgb(10, 120, 163)",
              fontWeight: "bold"
            }}
            variant="contained"
            type="submit"
            value="Submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default AddCollection;
