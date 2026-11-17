import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RestoreClockwiseBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RestoreClockwiseBottom: ForwardRefExoticComponent<RestoreClockwiseBottomProps & RefAttributes<SVGSVGElement>>;

export default RestoreClockwiseBottom;
export { RestoreClockwiseBottom };
