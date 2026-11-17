import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchToggleButtonOnDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchToggleButtonOnDots: ForwardRefExoticComponent<SwitchToggleButtonOnDotsProps & RefAttributes<SVGSVGElement>>;

export default SwitchToggleButtonOnDots;
export { SwitchToggleButtonOnDots };
