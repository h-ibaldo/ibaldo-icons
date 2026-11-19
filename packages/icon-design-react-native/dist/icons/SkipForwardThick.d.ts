import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SkipForwardThickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SkipForwardThick: ForwardRefExoticComponent<SkipForwardThickProps & RefAttributes<Svg>>;

export default SkipForwardThick;
export { SkipForwardThick };
