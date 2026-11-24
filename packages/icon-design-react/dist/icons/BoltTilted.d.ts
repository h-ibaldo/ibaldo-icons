import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoltTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoltTilted: ForwardRefExoticComponent<BoltTiltedProps & RefAttributes<SVGSVGElement>>;

export default BoltTilted;
export { BoltTilted };
