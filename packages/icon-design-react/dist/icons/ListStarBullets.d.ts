import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListStarBulletsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListStarBullets: ForwardRefExoticComponent<ListStarBulletsProps & RefAttributes<SVGSVGElement>>;

export default ListStarBullets;
export { ListStarBullets };
