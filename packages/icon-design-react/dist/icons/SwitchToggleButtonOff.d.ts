import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchToggleButtonOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchToggleButtonOff: ForwardRefExoticComponent<SwitchToggleButtonOffProps & RefAttributes<SVGSVGElement>>;

export default SwitchToggleButtonOff;
export { SwitchToggleButtonOff };
