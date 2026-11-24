import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarRound: ForwardRefExoticComponent<StarRoundProps & RefAttributes<SVGSVGElement>>;

export default StarRound;
export { StarRound };
