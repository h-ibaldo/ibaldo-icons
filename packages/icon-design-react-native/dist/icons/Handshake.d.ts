import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandshakeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Handshake: ForwardRefExoticComponent<HandshakeProps & RefAttributes<Svg>>;

export default Handshake;
export { Handshake };
