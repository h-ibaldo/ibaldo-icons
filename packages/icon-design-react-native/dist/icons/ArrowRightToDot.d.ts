import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRightToDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRightToDot: ForwardRefExoticComponent<ArrowRightToDotProps & RefAttributes<Svg>>;

export default ArrowRightToDot;
export { ArrowRightToDot };
