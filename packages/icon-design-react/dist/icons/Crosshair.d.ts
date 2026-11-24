import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CrosshairProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Crosshair: ForwardRefExoticComponent<CrosshairProps & RefAttributes<SVGSVGElement>>;

export default Crosshair;
export { Crosshair };
