import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtEqualCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtEqualCircle: ForwardRefExoticComponent<AtEqualCircleProps & RefAttributes<Svg>>;

export default AtEqualCircle;
export { AtEqualCircle };
