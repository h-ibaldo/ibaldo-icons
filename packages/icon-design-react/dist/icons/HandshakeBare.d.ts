import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandshakeBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandshakeBare: ForwardRefExoticComponent<HandshakeBareProps & RefAttributes<SVGSVGElement>>;

export default HandshakeBare;
export { HandshakeBare };
