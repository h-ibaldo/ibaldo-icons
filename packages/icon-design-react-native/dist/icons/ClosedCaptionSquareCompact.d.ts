import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClosedCaptionSquareCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionSquareCompact: ForwardRefExoticComponent<ClosedCaptionSquareCompactProps & RefAttributes<Svg>>;

export default ClosedCaptionSquareCompact;
export { ClosedCaptionSquareCompact };
