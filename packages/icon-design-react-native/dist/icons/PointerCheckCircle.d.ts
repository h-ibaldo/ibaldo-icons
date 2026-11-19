import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerCheckCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerCheckCircle: ForwardRefExoticComponent<PointerCheckCircleProps & RefAttributes<Svg>>;

export default PointerCheckCircle;
export { PointerCheckCircle };
