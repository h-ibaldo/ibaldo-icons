import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToggleOffSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToggleOffSlim: ForwardRefExoticComponent<ToggleOffSlimProps & RefAttributes<SVGSVGElement>>;

export default ToggleOffSlim;
export { ToggleOffSlim };
