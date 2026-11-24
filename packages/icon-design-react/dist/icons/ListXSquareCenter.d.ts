import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListXSquareCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListXSquareCenter: ForwardRefExoticComponent<ListXSquareCenterProps & RefAttributes<SVGSVGElement>>;

export default ListXSquareCenter;
export { ListXSquareCenter };
