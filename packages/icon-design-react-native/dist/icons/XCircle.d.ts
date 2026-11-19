import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface XCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const XCircle: ForwardRefExoticComponent<XCircleProps & RefAttributes<Svg>>;

export default XCircle;
export { XCircle };
