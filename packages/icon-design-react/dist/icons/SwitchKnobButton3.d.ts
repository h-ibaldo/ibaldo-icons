import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchKnobButton3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchKnobButton3: ForwardRefExoticComponent<SwitchKnobButton3Props & RefAttributes<SVGSVGElement>>;

export default SwitchKnobButton3;
export { SwitchKnobButton3 };
