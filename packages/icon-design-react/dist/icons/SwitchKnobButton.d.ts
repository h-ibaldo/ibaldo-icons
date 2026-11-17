import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchKnobButtonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchKnobButton: ForwardRefExoticComponent<SwitchKnobButtonProps & RefAttributes<SVGSVGElement>>;

export default SwitchKnobButton;
export { SwitchKnobButton };
