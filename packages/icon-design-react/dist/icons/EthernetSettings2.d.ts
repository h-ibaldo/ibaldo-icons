import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EthernetSettings2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EthernetSettings2: ForwardRefExoticComponent<EthernetSettings2Props & RefAttributes<SVGSVGElement>>;

export default EthernetSettings2;
export { EthernetSettings2 };
