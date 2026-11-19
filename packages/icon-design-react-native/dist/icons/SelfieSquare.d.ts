import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SelfieSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SelfieSquare: ForwardRefExoticComponent<SelfieSquareProps & RefAttributes<Svg>>;

export default SelfieSquare;
export { SelfieSquare };
