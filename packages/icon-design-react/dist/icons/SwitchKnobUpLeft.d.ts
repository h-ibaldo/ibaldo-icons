import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchKnobUpLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchKnobUpLeft: ForwardRefExoticComponent<SwitchKnobUpLeftProps & RefAttributes<SVGSVGElement>>;

export default SwitchKnobUpLeft;
export { SwitchKnobUpLeft };
