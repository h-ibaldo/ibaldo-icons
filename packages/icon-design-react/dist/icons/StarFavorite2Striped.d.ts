import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarFavorite2StripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarFavorite2Striped: ForwardRefExoticComponent<StarFavorite2StripedProps & RefAttributes<SVGSVGElement>>;

export default StarFavorite2Striped;
export { StarFavorite2Striped };
