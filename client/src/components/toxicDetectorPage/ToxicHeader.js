import React, { Fragment } from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const Text = styled.div`
    font-size: 36px;
    line-height: 42px;
    height: 64px;
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

export default ({isChecked, onChange}) => {
    return (
        <Fragment>
            <WhiteCheckbox 
                onChange={() => {
                    onChange(!isChecked)
                }}
                color="primary"
                checked={isChecked}
            />
            <Text> Tick </Text>
            {/* <Text> Round </Text> */}
            <Text> Player </Text>
            <Text> Message </Text>
            <Text> Listen </Text>
        </Fragment>
    )
}