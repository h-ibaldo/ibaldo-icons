import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FastForwardSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FastForwardSquare: ForwardRefExoticComponent<FastForwardSquareProps & RefAttributes<Svg>>;

export default FastForwardSquare;
export { FastForwardSquare };
