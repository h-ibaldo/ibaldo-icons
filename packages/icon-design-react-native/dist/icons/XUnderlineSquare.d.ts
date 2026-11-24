import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface XUnderlineSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const XUnderlineSquare: ForwardRefExoticComponent<XUnderlineSquareProps & RefAttributes<Svg>>;

export default XUnderlineSquare;
export { XUnderlineSquare };
