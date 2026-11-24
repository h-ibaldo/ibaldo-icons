import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellSnoozeWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellSnoozeWide: ForwardRefExoticComponent<BellSnoozeWideProps & RefAttributes<SVGSVGElement>>;

export default BellSnoozeWide;
export { BellSnoozeWide };
