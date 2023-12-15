import * as React from "react";

function Text(props) {
  return <div> Anp {props.children.props.content}</div>;
}

export default Text;
