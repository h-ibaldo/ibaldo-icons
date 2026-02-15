import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveSearchListFavoriteStarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveSearchListFavoriteStar: ForwardRefExoticComponent<SaveSearchListFavoriteStarProps & RefAttributes<SVGSVGElement>>;

export default SaveSearchListFavoriteStar;
export { SaveSearchListFavoriteStar };
