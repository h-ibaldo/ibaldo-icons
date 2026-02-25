import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchToggle32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchToggle32: ForwardRefExoticComponent<SwitchToggle32Props & RefAttributes<SVGSVGElement>>;

export default SwitchToggle32;
export { SwitchToggle32 };
