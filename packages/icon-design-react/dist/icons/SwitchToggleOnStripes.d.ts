import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchToggleOnStripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchToggleOnStripes: ForwardRefExoticComponent<SwitchToggleOnStripesProps & RefAttributes<SVGSVGElement>>;

export default SwitchToggleOnStripes;
export { SwitchToggleOnStripes };
