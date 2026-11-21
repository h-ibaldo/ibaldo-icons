import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SparkleFiveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SparkleFive: ForwardRefExoticComponent<SparkleFiveProps & RefAttributes<SVGSVGElement>>;

export default SparkleFive;
export { SparkleFive };
