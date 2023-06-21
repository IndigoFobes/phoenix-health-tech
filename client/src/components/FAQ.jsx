import React, { useEffect, useState, useRef } from "react";

export default function FAQ() {
  return (
    <div className="pb-20">
      <h1 className="faq text-center pt-10 pb-5">{`FAQs (Frequently Asked Questions)`}</h1>
      <div className="grid grid-cols-7">
        <ul className="col-start-2 col-end-7 dm-sans">
          <li>
            <div>
              <p>Question 1</p>
            </div>
          </li>
          <li>
            <div>
              <p>Question 2</p>
            </div>
          </li>
          <li>
            <div>
              <p>Question 3</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
