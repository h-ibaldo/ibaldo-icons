import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchDialLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchDialLeft: ForwardRefExoticComponent<SwitchDialLeftProps & RefAttributes<SVGSVGElement>>;

export default SwitchDialLeft;
export { SwitchDialLeft };
