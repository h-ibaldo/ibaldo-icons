import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BurstAFProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BurstAF: ForwardRefExoticComponent<BurstAFProps & RefAttributes<SVGSVGElement>>;

export default BurstAF;
export { BurstAF };
