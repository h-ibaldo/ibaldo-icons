import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftRightCircleHarpoonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftRightCircleHarpoon: ForwardRefExoticComponent<ArrowLeftRightCircleHarpoonProps & RefAttributes<Svg>>;

export default ArrowLeftRightCircleHarpoon;
export { ArrowLeftRightCircleHarpoon };
