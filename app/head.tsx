import { FC } from "react";

const Head: FC = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>

      {/* COLOR VARIABLE */}
      <link
        precedence="default"
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/abdulghofurme/b-color@v1.1.4/dist/variables.min.css"
      />
      {/* TYPOGRAPHY */}
      <link
        precedence="default"
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/abdulghofurme/b-typography@v1.0.1/dist/typography.min.css"
      />
      {/* COLOR TEXT */}
      <link
        precedence="default"
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/abdulghofurme/b-color@v1.1.4/dist/text.min.css"
      />
      {/* MATERIAL ICON */}
      <link
        precedence="default"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
    </>
  );
};

export default Head;
