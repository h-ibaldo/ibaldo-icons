import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunJaggedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunJagged: ForwardRefExoticComponent<SunJaggedProps & RefAttributes<Svg>>;

export default SunJagged;
export { SunJagged };
