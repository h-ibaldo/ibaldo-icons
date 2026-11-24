import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellRingLinesFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellRingLinesFlat: ForwardRefExoticComponent<BellRingLinesFlatProps & RefAttributes<SVGSVGElement>>;

export default BellRingLinesFlat;
export { BellRingLinesFlat };
