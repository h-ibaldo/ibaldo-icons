import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellRingLinesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellRingLines: ForwardRefExoticComponent<BellRingLinesProps & RefAttributes<SVGSVGElement>>;

export default BellRingLines;
export { BellRingLines };
