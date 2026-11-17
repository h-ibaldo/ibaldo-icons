import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellClockWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellClockWide: ForwardRefExoticComponent<BellClockWideProps & RefAttributes<SVGSVGElement>>;

export default BellClockWide;
export { BellClockWide };
