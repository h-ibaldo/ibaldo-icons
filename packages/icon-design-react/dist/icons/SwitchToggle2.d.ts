import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchToggle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchToggle2: ForwardRefExoticComponent<SwitchToggle2Props & RefAttributes<SVGSVGElement>>;

export default SwitchToggle2;
export { SwitchToggle2 };
