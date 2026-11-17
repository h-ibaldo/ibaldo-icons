import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToggleOnStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToggleOnStriped: ForwardRefExoticComponent<ToggleOnStripedProps & RefAttributes<SVGSVGElement>>;

export default ToggleOnStriped;
export { ToggleOnStriped };
