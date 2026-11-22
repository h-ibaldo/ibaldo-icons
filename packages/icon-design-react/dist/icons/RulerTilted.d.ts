import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RulerTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RulerTilted: ForwardRefExoticComponent<RulerTiltedProps & RefAttributes<SVGSVGElement>>;

export default RulerTilted;
export { RulerTilted };
