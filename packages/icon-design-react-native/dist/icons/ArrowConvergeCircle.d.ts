import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowConvergeCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowConvergeCircle: ForwardRefExoticComponent<ArrowConvergeCircleProps & RefAttributes<Svg>>;

export default ArrowConvergeCircle;
export { ArrowConvergeCircle };
