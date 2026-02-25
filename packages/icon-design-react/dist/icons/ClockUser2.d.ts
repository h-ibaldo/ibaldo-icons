import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockUser2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockUser2: ForwardRefExoticComponent<ClockUser2Props & RefAttributes<SVGSVGElement>>;

export default ClockUser2;
export { ClockUser2 };
