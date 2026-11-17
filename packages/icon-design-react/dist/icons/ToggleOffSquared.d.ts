import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToggleOffSquaredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToggleOffSquared: ForwardRefExoticComponent<ToggleOffSquaredProps & RefAttributes<SVGSVGElement>>;

export default ToggleOffSquared;
export { ToggleOffSquared };
