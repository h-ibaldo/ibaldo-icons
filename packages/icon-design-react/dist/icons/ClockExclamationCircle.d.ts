import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockExclamationCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockExclamationCircle: ForwardRefExoticComponent<ClockExclamationCircleProps & RefAttributes<SVGSVGElement>>;

export default ClockExclamationCircle;
export { ClockExclamationCircle };
