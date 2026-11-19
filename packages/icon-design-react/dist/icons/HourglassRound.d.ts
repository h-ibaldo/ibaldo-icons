import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassRound: ForwardRefExoticComponent<HourglassRoundProps & RefAttributes<SVGSVGElement>>;

export default HourglassRound;
export { HourglassRound };
