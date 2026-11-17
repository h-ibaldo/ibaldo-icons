import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockMailProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockMail: ForwardRefExoticComponent<ClockMailProps & RefAttributes<SVGSVGElement>>;

export default ClockMail;
export { ClockMail };
