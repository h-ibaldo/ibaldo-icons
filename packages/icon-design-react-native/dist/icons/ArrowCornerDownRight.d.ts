import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCornerDownRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCornerDownRight: ForwardRefExoticComponent<ArrowCornerDownRightProps & RefAttributes<Svg>>;

export default ArrowCornerDownRight;
export { ArrowCornerDownRight };
