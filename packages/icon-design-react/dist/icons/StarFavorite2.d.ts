import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarFavorite2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarFavorite2: ForwardRefExoticComponent<StarFavorite2Props & RefAttributes<SVGSVGElement>>;

export default StarFavorite2;
export { StarFavorite2 };
