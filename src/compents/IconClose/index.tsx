import React from "react";

interface Props {
    color?: string
}

const CloseIcon: React.FC<any & Props> = ({color, ...other}) => {
  return (
      <div {...other}>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            fill={color || "#FFF"}
            d="M39.993 36.357l-3.636 3.635-16.356-16.357L3.644 39.992.009 36.357 16.366 20 .009 3.643 3.644.008l16.357 16.357L36.357.008l3.636 3.635L23.636 20l16.357 16.357z"
        />
        </svg>
    </div>
  )
}

export default CloseIcon
