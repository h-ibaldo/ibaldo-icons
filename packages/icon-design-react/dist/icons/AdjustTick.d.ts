import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AdjustTickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AdjustTick: ForwardRefExoticComponent<AdjustTickProps & RefAttributes<SVGSVGElement>>;

export default AdjustTick;
export { AdjustTick };
