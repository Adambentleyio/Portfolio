import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
 :root {
    --bg-primary: #ff1A66;
    --text-primary: #313131
}

html {
    font-size: 10px;
}

h2, h3 {
    color: var(--text-primary);
}
  body {
    font-size: 2rem;
  }
  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }
  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--bg-primary) #777777;
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--bg-primary) ;
    border-radius: 6px;
    border: 3px solid white;
  }
  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }
  img {
    max-width: 100%;
  }
  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }
`;


export default GlobalStyles;
