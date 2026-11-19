import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AsteriskCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AsteriskCircle: ForwardRefExoticComponent<AsteriskCircleProps & RefAttributes<Svg>>;

export default AsteriskCircle;
export { AsteriskCircle };
