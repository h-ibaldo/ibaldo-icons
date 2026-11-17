import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RestoreCounterclockwiseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RestoreCounterclockwise: ForwardRefExoticComponent<RestoreCounterclockwiseProps & RefAttributes<SVGSVGElement>>;

export default RestoreCounterclockwise;
export { RestoreCounterclockwise };
