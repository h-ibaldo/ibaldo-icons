import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToggleOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToggleOff: ForwardRefExoticComponent<ToggleOffProps & RefAttributes<SVGSVGElement>>;

export default ToggleOff;
export { ToggleOff };
