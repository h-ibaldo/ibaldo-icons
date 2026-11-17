import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchLeverCupStemProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchLeverCupStem: ForwardRefExoticComponent<SwitchLeverCupStemProps & RefAttributes<SVGSVGElement>>;

export default SwitchLeverCupStem;
export { SwitchLeverCupStem };
