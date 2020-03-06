import React from "react";
import styled from "styled-components";

type Props = {}

const Link: React.FC<Props> = (props) => <Links href="/"> {props.children} </Links>

const Links = styled.a`
	display: block;
	padding: 5px 10px;
	 
	color: #386163;
	
	text-decoration: none;
	text-transform: uppercase;
	
	font-weight: bold;
	font-size: 18px;
`

export default Link