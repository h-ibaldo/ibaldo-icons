import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1FavoriteStarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1FavoriteStar: ForwardRefExoticComponent<Bookmark1FavoriteStarProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1FavoriteStar;
export { Bookmark1FavoriteStar };
