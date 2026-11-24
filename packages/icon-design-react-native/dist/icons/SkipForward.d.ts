import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SkipForwardProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SkipForward: ForwardRefExoticComponent<SkipForwardProps & RefAttributes<Svg>>;

export default SkipForward;
export { SkipForward };
