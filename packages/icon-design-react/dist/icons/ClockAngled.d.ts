import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockAngledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockAngled: ForwardRefExoticComponent<ClockAngledProps & RefAttributes<SVGSVGElement>>;

export default ClockAngled;
export { ClockAngled };
