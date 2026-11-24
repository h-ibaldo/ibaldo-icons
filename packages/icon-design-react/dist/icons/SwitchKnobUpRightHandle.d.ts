import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchKnobUpRightHandleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchKnobUpRightHandle: ForwardRefExoticComponent<SwitchKnobUpRightHandleProps & RefAttributes<SVGSVGElement>>;

export default SwitchKnobUpRightHandle;
export { SwitchKnobUpRightHandle };
