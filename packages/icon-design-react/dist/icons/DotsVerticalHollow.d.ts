import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DotsVerticalHollowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DotsVerticalHollow: ForwardRefExoticComponent<DotsVerticalHollowProps & RefAttributes<SVGSVGElement>>;

export default DotsVerticalHollow;
export { DotsVerticalHollow };
