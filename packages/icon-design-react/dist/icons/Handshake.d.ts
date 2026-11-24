import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandshakeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Handshake: ForwardRefExoticComponent<HandshakeProps & RefAttributes<SVGSVGElement>>;

export default Handshake;
export { Handshake };
