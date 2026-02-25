import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockCloud2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockCloud2: ForwardRefExoticComponent<ClockCloud2Props & RefAttributes<SVGSVGElement>>;

export default ClockCloud2;
export { ClockCloud2 };
