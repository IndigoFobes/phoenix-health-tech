import React from "react";

export default function Modal() {
  // probably will need to pass in props (id of hovered icon), but idk yet.
  const [hover, setHover] = React.useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
}
