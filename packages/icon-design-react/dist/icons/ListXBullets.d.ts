import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListXBulletsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListXBullets: ForwardRefExoticComponent<ListXBulletsProps & RefAttributes<SVGSVGElement>>;

export default ListXBullets;
export { ListXBullets };
