import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToggleMultipleSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToggleMultipleSlim: ForwardRefExoticComponent<ToggleMultipleSlimProps & RefAttributes<SVGSVGElement>>;

export default ToggleMultipleSlim;
export { ToggleMultipleSlim };
