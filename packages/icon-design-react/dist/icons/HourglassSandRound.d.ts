import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassSandRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassSandRound: ForwardRefExoticComponent<HourglassSandRoundProps & RefAttributes<SVGSVGElement>>;

export default HourglassSandRound;
export { HourglassSandRound };
