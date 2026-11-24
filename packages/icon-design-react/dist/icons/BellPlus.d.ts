import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellPlus: ForwardRefExoticComponent<BellPlusProps & RefAttributes<SVGSVGElement>>;

export default BellPlus;
export { BellPlus };
