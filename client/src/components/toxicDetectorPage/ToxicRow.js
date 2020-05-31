import React, { Fragment } from 'react'
import AudioButton from './AudioButton'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const Text = styled.div`
    font-size: 24px;
    line-height: 28px;
    color: '#ffffff !important';
`


const WhiteCheckbox = withStyles({
    root: {
      color: '#ffffff',
      '&$checked': {
        color: '#ffffff',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

export default ({ Audio, time, text, isChecked, onChange, id }) => {
    return (
        <Fragment>
            <WhiteCheckbox 
                onChange={() => {
                    onChange({
                        id,
                        newValue: !isChecked
                    })
                }}
                checked={isChecked}
            />
            <Text> {time} </Text>
            <Text> {text} </Text>
            <AudioButton Audio={Audio} />
        </Fragment>
    )
}