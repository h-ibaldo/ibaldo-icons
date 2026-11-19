import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowConvergeUpRightCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowConvergeUpRightCircle: ForwardRefExoticComponent<ArrowConvergeUpRightCircleProps & RefAttributes<Svg>>;

export default ArrowConvergeUpRightCircle;
export { ArrowConvergeUpRightCircle };
