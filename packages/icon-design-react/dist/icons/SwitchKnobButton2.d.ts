import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchKnobButton2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchKnobButton2: ForwardRefExoticComponent<SwitchKnobButton2Props & RefAttributes<SVGSVGElement>>;

export default SwitchKnobButton2;
export { SwitchKnobButton2 };
