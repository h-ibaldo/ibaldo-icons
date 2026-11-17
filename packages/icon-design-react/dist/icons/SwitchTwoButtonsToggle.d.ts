import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchTwoButtonsToggleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchTwoButtonsToggle: ForwardRefExoticComponent<SwitchTwoButtonsToggleProps & RefAttributes<SVGSVGElement>>;

export default SwitchTwoButtonsToggle;
export { SwitchTwoButtonsToggle };
