import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BagTaperedDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BagTaperedDots: ForwardRefExoticComponent<BagTaperedDotsProps & RefAttributes<SVGSVGElement>>;

export default BagTaperedDots;
export { BagTaperedDots };
