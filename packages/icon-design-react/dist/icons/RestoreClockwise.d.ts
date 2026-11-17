import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RestoreClockwiseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RestoreClockwise: ForwardRefExoticComponent<RestoreClockwiseProps & RefAttributes<SVGSVGElement>>;

export default RestoreClockwise;
export { RestoreClockwise };
