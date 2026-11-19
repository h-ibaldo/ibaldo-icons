import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface XSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const XSquare: ForwardRefExoticComponent<XSquareProps & RefAttributes<Svg>>;

export default XSquare;
export { XSquare };
