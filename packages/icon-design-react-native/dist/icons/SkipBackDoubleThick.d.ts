import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SkipBackDoubleThickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SkipBackDoubleThick: ForwardRefExoticComponent<SkipBackDoubleThickProps & RefAttributes<Svg>>;

export default SkipBackDoubleThick;
export { SkipBackDoubleThick };
