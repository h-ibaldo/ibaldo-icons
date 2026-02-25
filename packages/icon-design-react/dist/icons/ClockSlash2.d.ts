import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockSlash2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockSlash2: ForwardRefExoticComponent<ClockSlash2Props & RefAttributes<SVGSVGElement>>;

export default ClockSlash2;
export { ClockSlash2 };
