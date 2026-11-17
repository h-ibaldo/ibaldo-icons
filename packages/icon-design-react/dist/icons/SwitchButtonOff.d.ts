import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchButtonOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchButtonOff: ForwardRefExoticComponent<SwitchButtonOffProps & RefAttributes<SVGSVGElement>>;

export default SwitchButtonOff;
export { SwitchButtonOff };
