import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockFastAngledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockFastAngled: ForwardRefExoticComponent<ClockFastAngledProps & RefAttributes<SVGSVGElement>>;

export default ClockFastAngled;
export { ClockFastAngled };
