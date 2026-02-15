import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarFavoriteRating2FilledStripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarFavoriteRating2FilledStripes: ForwardRefExoticComponent<StarFavoriteRating2FilledStripesProps & RefAttributes<SVGSVGElement>>;

export default StarFavoriteRating2FilledStripes;
export { StarFavoriteRating2FilledStripes };
