import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCornerUpLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCornerUpLeft: ForwardRefExoticComponent<ArrowCornerUpLeftProps & RefAttributes<Svg>>;

export default ArrowCornerUpLeft;
export { ArrowCornerUpLeft };
