import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AsteriskSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AsteriskSquare: ForwardRefExoticComponent<AsteriskSquareProps & RefAttributes<Svg>>;

export default AsteriskSquare;
export { AsteriskSquare };
