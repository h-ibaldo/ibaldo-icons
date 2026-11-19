import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface XOverlineCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const XOverlineCircle: ForwardRefExoticComponent<XOverlineCircleProps & RefAttributes<Svg>>;

export default XOverlineCircle;
export { XOverlineCircle };
