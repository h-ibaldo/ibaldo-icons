import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FastForwardCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FastForwardCircle: ForwardRefExoticComponent<FastForwardCircleProps & RefAttributes<Svg>>;

export default FastForwardCircle;
export { FastForwardCircle };
