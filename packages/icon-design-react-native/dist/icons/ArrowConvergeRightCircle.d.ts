import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowConvergeRightCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowConvergeRightCircle: ForwardRefExoticComponent<ArrowConvergeRightCircleProps & RefAttributes<Svg>>;

export default ArrowConvergeRightCircle;
export { ArrowConvergeRightCircle };
