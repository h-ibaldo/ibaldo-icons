import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnUpCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnUpCircle: ForwardRefExoticComponent<ArrowUturnUpCircleProps & RefAttributes<Svg>>;

export default ArrowUturnUpCircle;
export { ArrowUturnUpCircle };
