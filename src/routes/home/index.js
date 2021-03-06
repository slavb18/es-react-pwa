import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: lightblue;
  box-shadow: 10px;
`;

export default () => {
return html`
<${React.Fragment}>
<${Wrapper}>
  <${Title}>es-react-pwa<//>
<//>
<a href="/about">About</a>
<//>
`;
}
