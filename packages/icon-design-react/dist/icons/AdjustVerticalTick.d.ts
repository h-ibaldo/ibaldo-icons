import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AdjustVerticalTickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AdjustVerticalTick: ForwardRefExoticComponent<AdjustVerticalTickProps & RefAttributes<SVGSVGElement>>;

export default AdjustVerticalTick;
export { AdjustVerticalTick };
