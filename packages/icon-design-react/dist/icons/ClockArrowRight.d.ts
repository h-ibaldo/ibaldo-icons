import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockArrowRight: ForwardRefExoticComponent<ClockArrowRightProps & RefAttributes<SVGSVGElement>>;

export default ClockArrowRight;
export { ClockArrowRight };
