import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchKnobUpLeftHandleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchKnobUpLeftHandle: ForwardRefExoticComponent<SwitchKnobUpLeftHandleProps & RefAttributes<SVGSVGElement>>;

export default SwitchKnobUpLeftHandle;
export { SwitchKnobUpLeftHandle };
