import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellSnoozeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellSnooze: ForwardRefExoticComponent<BellSnoozeProps & RefAttributes<SVGSVGElement>>;

export default BellSnooze;
export { BellSnooze };
