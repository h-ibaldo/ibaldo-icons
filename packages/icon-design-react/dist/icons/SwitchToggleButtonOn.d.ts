import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchToggleButtonOnProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchToggleButtonOn: ForwardRefExoticComponent<SwitchToggleButtonOnProps & RefAttributes<SVGSVGElement>>;

export default SwitchToggleButtonOn;
export { SwitchToggleButtonOn };
