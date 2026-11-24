import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorSquareCornerLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorSquareCornerLarge: ForwardRefExoticComponent<CursorSquareCornerLargeProps & RefAttributes<Svg>>;

export default CursorSquareCornerLarge;
export { CursorSquareCornerLarge };
