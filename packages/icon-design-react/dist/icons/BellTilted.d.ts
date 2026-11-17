import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellTilted: ForwardRefExoticComponent<BellTiltedProps & RefAttributes<SVGSVGElement>>;

export default BellTilted;
export { BellTilted };
