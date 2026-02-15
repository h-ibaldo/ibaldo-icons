import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockCloudProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockCloud: ForwardRefExoticComponent<ClockCloudProps & RefAttributes<SVGSVGElement>>;

export default ClockCloud;
export { ClockCloud };
