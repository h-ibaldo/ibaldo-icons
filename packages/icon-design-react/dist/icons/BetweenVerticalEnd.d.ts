import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BetweenVerticalEndProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BetweenVerticalEnd: ForwardRefExoticComponent<BetweenVerticalEndProps & RefAttributes<SVGSVGElement>>;

export default BetweenVerticalEnd;
export { BetweenVerticalEnd };
