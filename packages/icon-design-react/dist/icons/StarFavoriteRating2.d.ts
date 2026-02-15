import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarFavoriteRating2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarFavoriteRating2: ForwardRefExoticComponent<StarFavoriteRating2Props & RefAttributes<SVGSVGElement>>;

export default StarFavoriteRating2;
export { StarFavoriteRating2 };
