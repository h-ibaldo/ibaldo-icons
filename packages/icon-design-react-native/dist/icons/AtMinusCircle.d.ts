import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtMinusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtMinusCircle: ForwardRefExoticComponent<AtMinusCircleProps & RefAttributes<Svg>>;

export default AtMinusCircle;
export { AtMinusCircle };
