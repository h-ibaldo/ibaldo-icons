import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockSearch2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockSearch2: ForwardRefExoticComponent<ClockSearch2Props & RefAttributes<SVGSVGElement>>;

export default ClockSearch2;
export { ClockSearch2 };
