import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellTiltedWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellTiltedWide: ForwardRefExoticComponent<BellTiltedWideProps & RefAttributes<SVGSVGElement>>;

export default BellTiltedWide;
export { BellTiltedWide };
