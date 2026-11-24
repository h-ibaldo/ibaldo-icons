import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToggleOnStripedSquaredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToggleOnStripedSquared: ForwardRefExoticComponent<ToggleOnStripedSquaredProps & RefAttributes<SVGSVGElement>>;

export default ToggleOnStripedSquared;
export { ToggleOnStripedSquared };
