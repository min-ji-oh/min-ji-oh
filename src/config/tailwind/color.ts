// import type { DefaultColors } from 'tailwindcss/types/generated/colors'

/** blue */
const blue = {
  DEFAULT: '#5055B1',
  900: '#2C307C',
  /** Text color */
  800: '#474C98',
  /** Main color */
  700: '#5055B1',
  600: '#7377C0',
  500: '#9699D0',
  400: '#B9BBE0',
  300: '#DCDDEF',
  200: '#EDEDF7',
  100: '#F5F5FB'
}

/** bluelight */
const bluelight = {
  DEFAULT: '#156CDD',
  900: '#0A5DBF',
  /** Text color */
  800: '#1964C7',
  /** Main color */
  700: '#156CDD',
  600: '#4389E3',
  500: '#72A6EA',
  400: '#A1C4F1',
  300: '#D0E1F8',
  200: '#E7F0FC',
  100: '#F1F6FD'
}

/** green */
const green = {
  DEFAULT: '#4DAC27',
  900: '#2A760C',
  /** Text color */
  800: '#3C9A17',
  /** Main color */
  700: '#4DAC27',
  600: '#70BC52',
  500: '#94CD7D',
  400: '#B7DEA8',
  300: '#DBEED3',
  200: '#EDF7E9',
  100: '#F4FAF2'
}

/** red */
const red = {
  DEFAULT: '#DA2128',
  900: '#AC3024',
  /** Text color */
  800: '#EC1F2D',
  /** Main color */
  700: '#DA2128',
  600: '#E14D53',
  500: '#E97A7E',
  400: '#F0A6A9',
  300: '#F8D3D4',
  200: '#FCE9EA',
  100: '#FDF2F2'
}

/** gray */
const gray = {
  DEFAULT: '#767676',
  900: '#292929',
  800: '#595959',
  700: '#767676',
  600: '#999999',
  500: '#CCCCCC',
  400: '#D5D5D5',
  300: '#EAEAEA',
  200: '#F2F2F2',
  100: '#F7F7F7'
}

/** black */
const black = {
  DEFAULT: '#000000'
}

/** white */
const white = {
  DEFAULT: '#FFFFFF'
}

/**
 * 색상 - 교보문고 디자인 시스템
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
 */
export default {
  blue,
  bluelight,
  green,
  red,
  gray,
  black,
  white
} as const
// } satisfies DefaultColors
