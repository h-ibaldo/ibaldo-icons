import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarAddFavorite3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarAddFavorite3: ForwardRefExoticComponent<StarAddFavorite3Props & RefAttributes<SVGSVGElement>>;

export default StarAddFavorite3;
export { StarAddFavorite3 };
