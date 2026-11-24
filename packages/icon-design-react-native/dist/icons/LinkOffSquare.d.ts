import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkOffSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkOffSquare: ForwardRefExoticComponent<LinkOffSquareProps & RefAttributes<Svg>>;

export default LinkOffSquare;
export { LinkOffSquare };
