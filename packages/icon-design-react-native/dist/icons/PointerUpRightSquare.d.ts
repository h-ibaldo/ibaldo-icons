import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerUpRightSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerUpRightSquare: ForwardRefExoticComponent<PointerUpRightSquareProps & RefAttributes<Svg>>;

export default PointerUpRightSquare;
export { PointerUpRightSquare };
