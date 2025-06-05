import React from "react";
import styles from './Greetings.module.css'
import styled from 'styled-components';

const StyledComponent = styled.div`
  background-color: pink;
  padding: 15px;
  border-radius: 10px;
`;

function Greetings(props) {
    return (
        <div>
            <h3 className={styles.h3}>Hello</h3>
            <p>Welcome {props.name}!</p>
            <p> {props.message}</p>

            <StyledComponent>Styled with CSS-in-JS</StyledComponent>
        </div>
    )
}

export default Greetings;