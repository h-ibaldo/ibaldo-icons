import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchLeverCupProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchLeverCup: ForwardRefExoticComponent<SwitchLeverCupProps & RefAttributes<SVGSVGElement>>;

export default SwitchLeverCup;
export { SwitchLeverCup };
