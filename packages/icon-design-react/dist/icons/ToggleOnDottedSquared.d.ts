import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToggleOnDottedSquaredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToggleOnDottedSquared: ForwardRefExoticComponent<ToggleOnDottedSquaredProps & RefAttributes<SVGSVGElement>>;

export default ToggleOnDottedSquared;
export { ToggleOnDottedSquared };
