import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarFavorite1StripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarFavorite1Striped: ForwardRefExoticComponent<StarFavorite1StripedProps & RefAttributes<SVGSVGElement>>;

export default StarFavorite1Striped;
export { StarFavorite1Striped };
