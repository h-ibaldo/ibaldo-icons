import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorUpRightSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorUpRightSquare: ForwardRefExoticComponent<CursorUpRightSquareProps & RefAttributes<Svg>>;

export default CursorUpRightSquare;
export { CursorUpRightSquare };
