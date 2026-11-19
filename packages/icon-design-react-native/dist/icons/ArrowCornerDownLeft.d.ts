import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCornerDownLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCornerDownLeft: ForwardRefExoticComponent<ArrowCornerDownLeftProps & RefAttributes<Svg>>;

export default ArrowCornerDownLeft;
export { ArrowCornerDownLeft };
