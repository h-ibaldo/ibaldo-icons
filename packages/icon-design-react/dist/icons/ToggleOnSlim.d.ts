import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToggleOnSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToggleOnSlim: ForwardRefExoticComponent<ToggleOnSlimProps & RefAttributes<SVGSVGElement>>;

export default ToggleOnSlim;
export { ToggleOnSlim };
