import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DivideHollowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DivideHollow: ForwardRefExoticComponent<DivideHollowProps & RefAttributes<SVGSVGElement>>;

export default DivideHollow;
export { DivideHollow };
