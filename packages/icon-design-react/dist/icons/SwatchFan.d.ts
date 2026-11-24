import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwatchFanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwatchFan: ForwardRefExoticComponent<SwatchFanProps & RefAttributes<SVGSVGElement>>;

export default SwatchFan;
export { SwatchFan };
