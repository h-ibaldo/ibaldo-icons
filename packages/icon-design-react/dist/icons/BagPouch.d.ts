import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BagPouchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BagPouch: ForwardRefExoticComponent<BagPouchProps & RefAttributes<SVGSVGElement>>;

export default BagPouch;
export { BagPouch };
