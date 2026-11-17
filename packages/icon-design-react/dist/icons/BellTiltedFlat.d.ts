import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellTiltedFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellTiltedFlat: ForwardRefExoticComponent<BellTiltedFlatProps & RefAttributes<SVGSVGElement>>;

export default BellTiltedFlat;
export { BellTiltedFlat };
