import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EthernetProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Ethernet: ForwardRefExoticComponent<EthernetProps & RefAttributes<SVGSVGElement>>;

export default Ethernet;
export { Ethernet };
