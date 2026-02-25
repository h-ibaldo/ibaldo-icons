import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockPencilEdit2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockPencilEdit2: ForwardRefExoticComponent<ClockPencilEdit2Props & RefAttributes<SVGSVGElement>>;

export default ClockPencilEdit2;
export { ClockPencilEdit2 };
