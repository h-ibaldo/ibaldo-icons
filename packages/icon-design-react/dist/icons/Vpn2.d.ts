import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Vpn2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Vpn2: ForwardRefExoticComponent<Vpn2Props & RefAttributes<SVGSVGElement>>;

export default Vpn2;
export { Vpn2 };
