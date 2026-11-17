import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoltOffTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoltOffTilted: ForwardRefExoticComponent<BoltOffTiltedProps & RefAttributes<SVGSVGElement>>;

export default BoltOffTilted;
export { BoltOffTilted };
