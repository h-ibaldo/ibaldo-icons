import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EqualsCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EqualsCircle: ForwardRefExoticComponent<EqualsCircleProps & RefAttributes<Svg>>;

export default EqualsCircle;
export { EqualsCircle };
