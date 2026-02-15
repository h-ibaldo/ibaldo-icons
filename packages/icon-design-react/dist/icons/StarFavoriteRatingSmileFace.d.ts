import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarFavoriteRatingSmileFaceProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarFavoriteRatingSmileFace: ForwardRefExoticComponent<StarFavoriteRatingSmileFaceProps & RefAttributes<SVGSVGElement>>;

export default StarFavoriteRatingSmileFace;
export { StarFavoriteRatingSmileFace };
