import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListBulletsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListBullets: ForwardRefExoticComponent<ListBulletsProps & RefAttributes<SVGSVGElement>>;

export default ListBullets;
export { ListBullets };
