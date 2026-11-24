import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellSquareOffDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellSquareOffDash: ForwardRefExoticComponent<BellSquareOffDashProps & RefAttributes<SVGSVGElement>>;

export default BellSquareOffDash;
export { BellSquareOffDash };
