import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCornerLeftDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCornerLeftDown: ForwardRefExoticComponent<ArrowCornerLeftDownProps & RefAttributes<Svg>>;

export default ArrowCornerLeftDown;
export { ArrowCornerLeftDown };
