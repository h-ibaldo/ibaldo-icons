import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrophySquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrophySquare: ForwardRefExoticComponent<TrophySquareProps & RefAttributes<SVGSVGElement>>;

export default TrophySquare;
export { TrophySquare };
