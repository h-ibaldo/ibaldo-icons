import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SprayCanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SprayCan: ForwardRefExoticComponent<SprayCanProps & RefAttributes<SVGSVGElement>>;

export default SprayCan;
export { SprayCan };
