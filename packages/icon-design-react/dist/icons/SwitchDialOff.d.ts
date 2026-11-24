import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchDialOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchDialOff: ForwardRefExoticComponent<SwitchDialOffProps & RefAttributes<SVGSVGElement>>;

export default SwitchDialOff;
export { SwitchDialOff };
