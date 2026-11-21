import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandshakeBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandshakeBare: ForwardRefExoticComponent<HandshakeBareProps & RefAttributes<Svg>>;

export default HandshakeBare;
export { HandshakeBare };
