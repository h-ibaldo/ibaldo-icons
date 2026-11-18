import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassSandFallingRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassSandFallingRound: ForwardRefExoticComponent<HourglassSandFallingRoundProps & RefAttributes<SVGSVGElement>>;

export default HourglassSandFallingRound;
export { HourglassSandFallingRound };
