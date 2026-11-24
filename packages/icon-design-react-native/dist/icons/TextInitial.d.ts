import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextInitialProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextInitial: ForwardRefExoticComponent<TextInitialProps & RefAttributes<Svg>>;

export default TextInitial;
export { TextInitial };
