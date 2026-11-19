import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface XOverlineSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const XOverlineSquare: ForwardRefExoticComponent<XOverlineSquareProps & RefAttributes<Svg>>;

export default XOverlineSquare;
export { XOverlineSquare };
