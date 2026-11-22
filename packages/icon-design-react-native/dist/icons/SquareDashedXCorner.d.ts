import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareDashedXCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareDashedXCorner: ForwardRefExoticComponent<SquareDashedXCornerProps & RefAttributes<Svg>>;

export default SquareDashedXCorner;
export { SquareDashedXCorner };
