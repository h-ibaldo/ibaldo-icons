import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchToggleTwoButtonsOnAndOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchToggleTwoButtonsOnAndOff: ForwardRefExoticComponent<SwitchToggleTwoButtonsOnAndOffProps & RefAttributes<SVGSVGElement>>;

export default SwitchToggleTwoButtonsOnAndOff;
export { SwitchToggleTwoButtonsOnAndOff };
