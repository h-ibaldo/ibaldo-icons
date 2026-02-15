import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarFavoriteRating3FilledStripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarFavoriteRating3FilledStripes: ForwardRefExoticComponent<StarFavoriteRating3FilledStripesProps & RefAttributes<SVGSVGElement>>;

export default StarFavoriteRating3FilledStripes;
export { StarFavoriteRating3FilledStripes };
