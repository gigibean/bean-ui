export * from '@emotion/styled';
export { default } from '@emotion/styled';
export { ThemeContext, keyframes, css } from '@emotion/react';

// import emStyled from '@emotion/styled';

// export default function styled(tag, options) {
//   const stylesFactory = emStyled(tag, options);

//   if (process.env.NODE_ENV !== 'production') {
//     return (...styles) => {
//       const component = typeof tag === 'string' ? `"${tag}"` : 'component';
//       if (styles.length === 0) {
//         console.error(
//           [
//             `MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`,
//             'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.',
//           ].join('\n'),
//         );
//       } else if (styles.some((style) => style === undefined)) {
//         console.error(
//           `MUI: the styled(${component})(...args) API requires all its args to be defined.`,
//         );
//       }
//       return stylesFactory(...styles);
//     };
//   }

//   return stylesFactory;
// }

// export { ThemeContext, keyframes, css } from '@emotion/react';

// export * from './types';
