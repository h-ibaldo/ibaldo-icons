import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockArrowLeftRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockArrowLeftRight: ForwardRefExoticComponent<ClockArrowLeftRightProps & RefAttributes<SVGSVGElement>>;

export default ClockArrowLeftRight;
export { ClockArrowLeftRight };
