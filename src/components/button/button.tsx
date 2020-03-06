import React from "react";
import styled from "styled-components";

type Props = {}

const Button: React.FC<Props> = (props) => {
	return (
		<Btn onClick={() => console.log("smtng")}> {props.children} </Btn>
	)
}

const Btn = styled.button`
	background: cadetblue;
	color: #203f41;
	
	border: 1px solid cadetblue;
	border-radius: 5px;
	
	padding: 5px 10px;
`

export default Button