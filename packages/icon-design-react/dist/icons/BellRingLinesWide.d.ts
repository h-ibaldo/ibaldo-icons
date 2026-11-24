import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellRingLinesWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellRingLinesWide: ForwardRefExoticComponent<BellRingLinesWideProps & RefAttributes<SVGSVGElement>>;

export default BellRingLinesWide;
export { BellRingLinesWide };
