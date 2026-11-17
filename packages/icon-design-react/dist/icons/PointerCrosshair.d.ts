import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerCrosshairProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerCrosshair: ForwardRefExoticComponent<PointerCrosshairProps & RefAttributes<SVGSVGElement>>;

export default PointerCrosshair;
export { PointerCrosshair };
