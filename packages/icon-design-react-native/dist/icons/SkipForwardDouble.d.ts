import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SkipForwardDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SkipForwardDouble: ForwardRefExoticComponent<SkipForwardDoubleProps & RefAttributes<Svg>>;

export default SkipForwardDouble;
export { SkipForwardDouble };
