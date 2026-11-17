import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchDialUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchDialUp: ForwardRefExoticComponent<SwitchDialUpProps & RefAttributes<SVGSVGElement>>;

export default SwitchDialUp;
export { SwitchDialUp };
