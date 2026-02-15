import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockAttachment1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockAttachment1: ForwardRefExoticComponent<ClockAttachment1Props & RefAttributes<SVGSVGElement>>;

export default ClockAttachment1;
export { ClockAttachment1 };
