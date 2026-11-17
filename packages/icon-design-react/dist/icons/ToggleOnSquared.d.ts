import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToggleOnSquaredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToggleOnSquared: ForwardRefExoticComponent<ToggleOnSquaredProps & RefAttributes<SVGSVGElement>>;

export default ToggleOnSquared;
export { ToggleOnSquared };
