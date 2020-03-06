import React from "react";
import Input from "../input";
import Button from "../button";
import Link from "../link";
import Checkbox from "../checkbox";

type Props = {}

const App: React.FC<Props> = () => {
	return (
		<>
			<Input/>
			<div>
				<Button> What? </Button>
			</div>
			<div>
				<Link> Fuck uuu </Link>
			</div>
			<div>
				<Checkbox/>
			</div>
		</>
	)
}


export default App