import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Vpn1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Vpn1: ForwardRefExoticComponent<Vpn1Props & RefAttributes<SVGSVGElement>>;

export default Vpn1;
export { Vpn1 };
