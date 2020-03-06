import React, {useState} from 'react'
import styled from 'styled-components'

const Checkbox: React.FC = () => {
	const [checked, setChecked] = useState(true)

	return (
		<>
			<HiddenCheckbox checked={checked}/>
			<StyledCheckbox onClick={() => setChecked(!checked)}>
				{
					checked
						? (
							<Icon viewBox="0 0 24 24">
								<polyline points="20 6 9 17 4 12"/>
							</Icon>)
						: false
				}

			</StyledCheckbox>
		</>
	)
}


const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
  border-radius: 3px;
  background-color: #3f6e70;
`

const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: cadetblue;
  border-radius: 3px;
  transition: all 150ms;
`

export default Checkbox
