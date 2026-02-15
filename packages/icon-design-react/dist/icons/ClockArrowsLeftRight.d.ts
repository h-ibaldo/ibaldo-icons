import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockArrowsLeftRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockArrowsLeftRight: ForwardRefExoticComponent<ClockArrowsLeftRightProps & RefAttributes<SVGSVGElement>>;

export default ClockArrowsLeftRight;
export { ClockArrowsLeftRight };
