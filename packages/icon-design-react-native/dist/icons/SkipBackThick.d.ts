import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SkipBackThickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SkipBackThick: ForwardRefExoticComponent<SkipBackThickProps & RefAttributes<Svg>>;

export default SkipBackThick;
export { SkipBackThick };
