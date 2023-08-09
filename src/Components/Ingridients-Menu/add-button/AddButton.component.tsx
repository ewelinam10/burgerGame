import React from "react";
import styled from "@emotion/styled";
import {Button} from "@mui/material";

export interface IAddButtonProps {
    title?: string;
    bgColor: string
    shape?: 'rounded' | 'square'
}

const AddButton: React.FC<IAddButtonProps> = ({title, bgColor, shape = 'square'}) => {
    return (
        <>
            <StyledAddButton shape={shape} bgColor={bgColor} variant={'contained'}>{title}</StyledAddButton>
        </>
    );
};

const StyledAddButton = styled(Button)<IAddButtonProps>`
  padding: 32px;
  background-color: ${({bgColor}) => bgColor}; //or  #{props=> props.bgcolor ) 
  font-size: 24px;

  border-radius: ${(props) => {
    console.log(props)
    if (props.shape === 'rounded') {
      return '50px'
    }
    return '4px'
  }};
  color: black;
  font-weight: bold;

  &:hover {
    color: white;
  }
`
export default AddButton