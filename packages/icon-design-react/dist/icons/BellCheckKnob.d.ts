import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellCheckKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellCheckKnob: ForwardRefExoticComponent<BellCheckKnobProps & RefAttributes<SVGSVGElement>>;

export default BellCheckKnob;
export { BellCheckKnob };
