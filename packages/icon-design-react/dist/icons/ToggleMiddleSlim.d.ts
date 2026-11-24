import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToggleMiddleSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToggleMiddleSlim: ForwardRefExoticComponent<ToggleMiddleSlimProps & RefAttributes<SVGSVGElement>>;

export default ToggleMiddleSlim;
export { ToggleMiddleSlim };
