import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SprayCanBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SprayCanBare: ForwardRefExoticComponent<SprayCanBareProps & RefAttributes<SVGSVGElement>>;

export default SprayCanBare;
export { SprayCanBare };
