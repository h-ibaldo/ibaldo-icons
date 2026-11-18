import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockMinusTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockMinusTop: ForwardRefExoticComponent<ClockMinusTopProps & RefAttributes<SVGSVGElement>>;

export default ClockMinusTop;
export { ClockMinusTop };
