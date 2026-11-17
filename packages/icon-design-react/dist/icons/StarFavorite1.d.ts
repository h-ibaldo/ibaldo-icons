import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarFavorite1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarFavorite1: ForwardRefExoticComponent<StarFavorite1Props & RefAttributes<SVGSVGElement>>;

export default StarFavorite1;
export { StarFavorite1 };
