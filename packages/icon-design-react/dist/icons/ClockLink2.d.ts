import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockLink2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockLink2: ForwardRefExoticComponent<ClockLink2Props & RefAttributes<SVGSVGElement>>;

export default ClockLink2;
export { ClockLink2 };
