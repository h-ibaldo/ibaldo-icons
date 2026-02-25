import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockUnlock2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockUnlock2: ForwardRefExoticComponent<ClockUnlock2Props & RefAttributes<SVGSVGElement>>;

export default ClockUnlock2;
export { ClockUnlock2 };
