import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchToggleOnDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchToggleOnDots: ForwardRefExoticComponent<SwitchToggleOnDotsProps & RefAttributes<SVGSVGElement>>;

export default SwitchToggleOnDots;
export { SwitchToggleOnDots };
