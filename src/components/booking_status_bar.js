import React from "react";
import {
  BOOKABLE_START_TIME,
  BOOKABLE_END_TIME,
  MIN_BOOKABLE_SLOT
} from "../constants";

import BookingBarLabels from "./booking_bar_labels";

const BookingStatusBar = ({ availableSlots, selectedSlots }) => {
  availableSlots = availableSlots || [];
  selectedSlots = selectedSlots || [];

  const blockCount =
    (BOOKABLE_END_TIME - BOOKABLE_START_TIME) / MIN_BOOKABLE_SLOT;
  let blocks = [];
  const BLOCK_WIDTH = 8;
  const BAR_PADDING = 15;

  let key = 0;

  // Build initial block showing all as red
  for (var i = 0; i < blockCount; i++) {
    blocks.push(
      <g>
        <rect
          x={i * BLOCK_WIDTH + BAR_PADDING}
          y="20"
          width={BLOCK_WIDTH}
          height="15"
          fill="#bbb"
        />

        <rect
          x={i * BLOCK_WIDTH + BAR_PADDING}
          y="20"
          width={BLOCK_WIDTH}
          height="15"
          fill="url(#diagonalHatch)"
        >
          <title>Booked</title>
        </rect>
      </g>
    );
  }
  /*
  for (var i = 0; i < blockCount; i++) {
    blocks.push(
      <rect
        x={i * BLOCK_WIDTH + BAR_PADDING}
        y="20"
        width={BLOCK_WIDTH}
        height="15"
        fill="url(#diagonalHatch)" //"#E31E2F"
      />
    );
  }
*/
  // Display available times
  for (let availableSlot of availableSlots) {
    blocks.push(
      <g>
        <rect
          x={availableSlot * BLOCK_WIDTH + BAR_PADDING}
          y="20"
          width={BLOCK_WIDTH}
          height="15"
          fill="#9ABD36"
        >
          <title>Available</title>
        </rect>
      </g>
    );
  }

  // Highlight selected time between slider handles
  for (let selectedSlot of selectedSlots) {
    blocks.push(
      <rect
        x={selectedSlot * BLOCK_WIDTH + BAR_PADDING}
        y="28"
        width={BLOCK_WIDTH}
        height="7"
        fill="#FFE900"
      />
    );
  }

  // Time labels
  for (var i = 0; i <= 12; i += 2) {
    blocks.push(
      <text
        x={i * BLOCK_WIDTH * 4 + BAR_PADDING}
        y="13"
        fill="grey"
        style={{
          fontSize: 12,
          fontWeight: 400,
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          textAnchor: "middle"
        }}
      >
        {i + 7 < 10 && 0}
        {i + 7}:00
      </text>
    );
  }

  // markers - every 4th block
  for (var i = 0; i < blockCount; i = i + 4) {
    blocks.push(
      <rect
        x={i * BLOCK_WIDTH + BAR_PADDING}
        y="20"
        width={1}
        height="15"
        fill="white"
      />
    );
  }

  return (
    <div>
      <div className="booking-status-bar col-md-4">
        <svg className="booking-status-bar-bar" width={420}>
          <pattern
            id="verticalHatch"
            width="3"
            height="10"
            patternTransform="rotate(0 0 0)"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="10"
              style={{ stroke: "#00b556", strokeWidth: 1 }}
            />
          </pattern>

          <pattern
            id="diagonalHatch"
            patternUnits="userSpaceOnUse"
            width="4"
            height="4"
          >
            <path
              d="M-1,1 l2,-2
               M0,4 l4,-4
               M3,5 l2,-2"
              style={{ stroke: "#ddd", strokeWidth: 1 }}
            />
          </pattern>
          {blocks}
        </svg>
      </div>
    </div>
  );
};

export default BookingStatusBar;
