import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowConvergeDownCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowConvergeDownCircle: ForwardRefExoticComponent<ArrowConvergeDownCircleProps & RefAttributes<Svg>>;

export default ArrowConvergeDownCircle;
export { ArrowConvergeDownCircle };
