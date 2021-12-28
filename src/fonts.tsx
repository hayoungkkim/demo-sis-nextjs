import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url('./fonts/SpoqaHanSansNeo-Thin.woff2') format('woff2'), url('./fonts/SpoqaHanSansNeo-Thin.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('./fonts/SpoqaHanSansNeo-Light.woff2') format('woff2'), url('./fonts/SpoqaHanSansNeo-Light.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/SpoqaHanSansNeo-Regular.woff2') format('woff2'), url('./fonts/SpoqaHanSansNeo-Regular.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('./fonts/SpoqaHanSansNeo-Medium.woff2') format('woff2'), url('./fonts/SpoqaHanSansNeo-Medium.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/SpoqaHanSansNeo-Bold.woff2') format('woff2'), url('./fonts/SpoqaHanSansNeo-Bold.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
)

export default Fonts
