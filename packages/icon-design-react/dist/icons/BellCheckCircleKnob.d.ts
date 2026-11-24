import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellCheckCircleKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellCheckCircleKnob: ForwardRefExoticComponent<BellCheckCircleKnobProps & RefAttributes<SVGSVGElement>>;

export default BellCheckCircleKnob;
export { BellCheckCircleKnob };
