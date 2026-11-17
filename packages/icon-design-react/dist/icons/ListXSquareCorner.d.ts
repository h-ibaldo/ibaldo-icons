import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListXSquareCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListXSquareCorner: ForwardRefExoticComponent<ListXSquareCornerProps & RefAttributes<SVGSVGElement>>;

export default ListXSquareCorner;
export { ListXSquareCorner };
