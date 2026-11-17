import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchKnobUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchKnobUpRight: ForwardRefExoticComponent<SwitchKnobUpRightProps & RefAttributes<SVGSVGElement>>;

export default SwitchKnobUpRight;
export { SwitchKnobUpRight };
