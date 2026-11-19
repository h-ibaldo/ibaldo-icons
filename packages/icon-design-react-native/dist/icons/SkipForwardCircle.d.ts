import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SkipForwardCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SkipForwardCircle: ForwardRefExoticComponent<SkipForwardCircleProps & RefAttributes<Svg>>;

export default SkipForwardCircle;
export { SkipForwardCircle };
