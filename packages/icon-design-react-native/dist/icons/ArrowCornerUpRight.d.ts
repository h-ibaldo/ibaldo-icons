import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCornerUpRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCornerUpRight: ForwardRefExoticComponent<ArrowCornerUpRightProps & RefAttributes<Svg>>;

export default ArrowCornerUpRight;
export { ArrowCornerUpRight };
