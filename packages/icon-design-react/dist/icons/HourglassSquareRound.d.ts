import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassSquareRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassSquareRound: ForwardRefExoticComponent<HourglassSquareRoundProps & RefAttributes<SVGSVGElement>>;

export default HourglassSquareRound;
export { HourglassSquareRound };
