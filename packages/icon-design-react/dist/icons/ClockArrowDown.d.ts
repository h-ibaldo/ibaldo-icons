import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockArrowDown: ForwardRefExoticComponent<ClockArrowDownProps & RefAttributes<SVGSVGElement>>;

export default ClockArrowDown;
export { ClockArrowDown };
