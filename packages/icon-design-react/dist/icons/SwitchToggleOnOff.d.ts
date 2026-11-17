import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchToggleOnOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchToggleOnOff: ForwardRefExoticComponent<SwitchToggleOnOffProps & RefAttributes<SVGSVGElement>>;

export default SwitchToggleOnOff;
export { SwitchToggleOnOff };
