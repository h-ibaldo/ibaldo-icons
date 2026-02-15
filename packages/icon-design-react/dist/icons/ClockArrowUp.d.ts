import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockArrowUp: ForwardRefExoticComponent<ClockArrowUpProps & RefAttributes<SVGSVGElement>>;

export default ClockArrowUp;
export { ClockArrowUp };
