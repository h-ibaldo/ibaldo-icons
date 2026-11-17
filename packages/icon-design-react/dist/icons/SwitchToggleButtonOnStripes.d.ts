import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchToggleButtonOnStripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchToggleButtonOnStripes: ForwardRefExoticComponent<SwitchToggleButtonOnStripesProps & RefAttributes<SVGSVGElement>>;

export default SwitchToggleButtonOnStripes;
export { SwitchToggleButtonOnStripes };
