import React from "react";
import styled from "styled-components";

type Props = {}

const Select: React.FC<Props> = () => {
	return (
		<Grid>
			<StyledLabel className="label" htmlFor="input"> Some label </StyledLabel>
			<StyledInput id="input"/>
		</Grid>
	)
};

const Grid = styled.div`
	width: 500px;
	height: 300px;
	
	margin-top: 2%;
	
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	
	background: rgba(75,127,129,0.36);
`

const StyledLabel = styled.label`
	font-size: 18px;
	font-weight: bold;
	
	color: cadetblue;
	
	margin-bottom: 10px;
	
 `
const StyledInput = styled.input`
	width: 40%;
	
	padding: 10px 20px;
	
	border-radius: 20px;
	border: 1px solid cadetblue;
	
	outline: none;
	
	 &:hover {
     width: 55%;
     border: 1px solid #284345;
     transition: width .6s, border .5s;
    }
`

export default Select