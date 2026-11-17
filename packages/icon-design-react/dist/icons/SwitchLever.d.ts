import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchLeverProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchLever: ForwardRefExoticComponent<SwitchLeverProps & RefAttributes<SVGSVGElement>>;

export default SwitchLever;
export { SwitchLever };
