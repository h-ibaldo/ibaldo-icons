import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchBoltKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchBoltKnob: ForwardRefExoticComponent<StopwatchBoltKnobProps & RefAttributes<SVGSVGElement>>;

export default StopwatchBoltKnob;
export { StopwatchBoltKnob };
