import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockMinus: ForwardRefExoticComponent<ClockMinusProps & RefAttributes<SVGSVGElement>>;

export default ClockMinus;
export { ClockMinus };
