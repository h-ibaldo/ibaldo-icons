import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassSyncRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassSyncRound: ForwardRefExoticComponent<HourglassSyncRoundProps & RefAttributes<SVGSVGElement>>;

export default HourglassSyncRound;
export { HourglassSyncRound };
