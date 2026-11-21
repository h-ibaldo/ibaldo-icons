import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SparklePlusDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SparklePlusDouble: ForwardRefExoticComponent<SparklePlusDoubleProps & RefAttributes<SVGSVGElement>>;

export default SparklePlusDouble;
export { SparklePlusDouble };
