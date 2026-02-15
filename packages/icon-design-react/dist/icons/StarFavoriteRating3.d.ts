import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarFavoriteRating3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarFavoriteRating3: ForwardRefExoticComponent<StarFavoriteRating3Props & RefAttributes<SVGSVGElement>>;

export default StarFavoriteRating3;
export { StarFavoriteRating3 };
