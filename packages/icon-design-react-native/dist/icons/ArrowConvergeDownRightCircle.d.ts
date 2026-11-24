import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowConvergeDownRightCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowConvergeDownRightCircle: ForwardRefExoticComponent<ArrowConvergeDownRightCircleProps & RefAttributes<Svg>>;

export default ArrowConvergeDownRightCircle;
export { ArrowConvergeDownRightCircle };
