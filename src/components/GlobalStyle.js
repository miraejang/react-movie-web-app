const { createGlobalStyle } = require('styled-components');

const GlobalStyle = createGlobalStyle`
body, div, ul, li, h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
li {
  list-style: none;
}

body {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #17181b;
  color: #fff;
  overflow: hidden;
}
#root {
  display: flex;
  width: 100%;
  flex-direction: column;
  color: #fff;
}

.loader {
  animation: rotation 5s linear infinite;
}

@keyframes rotation {
  0 { transform: rotate(0deg); opacity: 0.5; }
  25% { transform: rotate(90deg); opacity: 1; }
  50% { transform: rotate(180deg); opacity: 0.5; }
  75% { transform: rotate(270deg); opacity: 1; }
  100% { transform: rotate(360deg); opacity: 0.5; }
}
`;

export default GlobalStyle;
