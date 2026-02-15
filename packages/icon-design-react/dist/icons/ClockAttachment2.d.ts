import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockAttachment2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockAttachment2: ForwardRefExoticComponent<ClockAttachment2Props & RefAttributes<SVGSVGElement>>;

export default ClockAttachment2;
export { ClockAttachment2 };
