import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorSquareCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorSquareCorner: ForwardRefExoticComponent<CursorSquareCornerProps & RefAttributes<Svg>>;

export default CursorSquareCorner;
export { CursorSquareCorner };
