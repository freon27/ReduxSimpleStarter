import React, { Component } from "react";
import { connect } from "react-redux";

import TimeSlider from "./time_slider";
import BookingStatusBar from "./booking_status_bar";
import RoomList from "../containers/room_list";
import RoomFilter from "../containers/room_filter";
import DatePicker from "../containers/date_picker";
import BookingForm from "../containers/booking_form";
import { ModalWrapper } from "react-redux-bootstrap-modal";

class App extends Component {
  render() {
    //<TimeSlider />
    return (
      <div className="row section-container">
        <h3>BOOKING</h3>
        <div className="col-md-2">
          <h4>
            <span className="glyphicon glyphicon-calendar" /> DATE
          </h4>
          <DatePicker />
          <RoomFilter />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-12">
              <RoomList />
            </div>
          </div>
        </div>
        <ModalWrapper name="my-modal" component={BookingForm} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(null, mapDispatchToProps)(App);
