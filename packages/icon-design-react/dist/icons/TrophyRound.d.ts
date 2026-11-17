import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrophyRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrophyRound: ForwardRefExoticComponent<TrophyRoundProps & RefAttributes<SVGSVGElement>>;

export default TrophyRound;
export { TrophyRound };
