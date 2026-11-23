import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BetweenHorizontalEndProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BetweenHorizontalEnd: ForwardRefExoticComponent<BetweenHorizontalEndProps & RefAttributes<SVGSVGElement>>;

export default BetweenHorizontalEnd;
export { BetweenHorizontalEnd };
