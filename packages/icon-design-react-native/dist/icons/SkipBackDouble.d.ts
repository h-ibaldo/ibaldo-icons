import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SkipBackDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SkipBackDouble: ForwardRefExoticComponent<SkipBackDoubleProps & RefAttributes<Svg>>;

export default SkipBackDouble;
export { SkipBackDouble };
