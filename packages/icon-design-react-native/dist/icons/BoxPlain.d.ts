import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxPlain: ForwardRefExoticComponent<BoxPlainProps & RefAttributes<Svg>>;

export default BoxPlain;
export { BoxPlain };
