import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassCircleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassCircleRound: ForwardRefExoticComponent<HourglassCircleRoundProps & RefAttributes<SVGSVGElement>>;

export default HourglassCircleRound;
export { HourglassCircleRound };
