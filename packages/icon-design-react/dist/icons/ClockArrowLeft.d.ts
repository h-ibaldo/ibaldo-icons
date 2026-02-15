import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockArrowLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockArrowLeft: ForwardRefExoticComponent<ClockArrowLeftProps & RefAttributes<SVGSVGElement>>;

export default ClockArrowLeft;
export { ClockArrowLeft };
