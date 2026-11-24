import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrophyCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrophyCircle: ForwardRefExoticComponent<TrophyCircleProps & RefAttributes<SVGSVGElement>>;

export default TrophyCircle;
export { TrophyCircle };
