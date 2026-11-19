import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FullscreenSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FullscreenSquare: ForwardRefExoticComponent<FullscreenSquareProps & RefAttributes<Svg>>;

export default FullscreenSquare;
export { FullscreenSquare };
