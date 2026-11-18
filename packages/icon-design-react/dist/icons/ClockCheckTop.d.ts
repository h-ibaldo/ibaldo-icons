import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockCheckTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockCheckTop: ForwardRefExoticComponent<ClockCheckTopProps & RefAttributes<SVGSVGElement>>;

export default ClockCheckTop;
export { ClockCheckTop };
