import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellRingWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellRingWide: ForwardRefExoticComponent<BellRingWideProps & RefAttributes<SVGSVGElement>>;

export default BellRingWide;
export { BellRingWide };
