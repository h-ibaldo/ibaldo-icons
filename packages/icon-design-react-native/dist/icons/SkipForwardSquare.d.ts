import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SkipForwardSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SkipForwardSquare: ForwardRefExoticComponent<SkipForwardSquareProps & RefAttributes<Svg>>;

export default SkipForwardSquare;
export { SkipForwardSquare };
