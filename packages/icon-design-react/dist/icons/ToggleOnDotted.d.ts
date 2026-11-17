import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToggleOnDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToggleOnDotted: ForwardRefExoticComponent<ToggleOnDottedProps & RefAttributes<SVGSVGElement>>;

export default ToggleOnDotted;
export { ToggleOnDotted };
