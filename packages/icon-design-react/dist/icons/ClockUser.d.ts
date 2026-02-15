import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockUserProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockUser: ForwardRefExoticComponent<ClockUserProps & RefAttributes<SVGSVGElement>>;

export default ClockUser;
export { ClockUser };
