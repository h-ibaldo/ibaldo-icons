import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VpnProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Vpn: ForwardRefExoticComponent<VpnProps & RefAttributes<SVGSVGElement>>;

export default Vpn;
export { Vpn };
