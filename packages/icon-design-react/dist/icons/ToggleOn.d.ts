import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToggleOnProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToggleOn: ForwardRefExoticComponent<ToggleOnProps & RefAttributes<SVGSVGElement>>;

export default ToggleOn;
export { ToggleOn };
