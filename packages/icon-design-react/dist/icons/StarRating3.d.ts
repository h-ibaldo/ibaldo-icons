import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarRating3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarRating3: ForwardRefExoticComponent<StarRating3Props & RefAttributes<SVGSVGElement>>;

export default StarRating3;
export { StarRating3 };
