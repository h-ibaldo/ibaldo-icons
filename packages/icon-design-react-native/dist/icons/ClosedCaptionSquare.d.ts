import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClosedCaptionSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionSquare: ForwardRefExoticComponent<ClosedCaptionSquareProps & RefAttributes<Svg>>;

export default ClosedCaptionSquare;
export { ClosedCaptionSquare };
