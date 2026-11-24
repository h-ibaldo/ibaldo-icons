import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListSquareCursorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListSquareCursor: ForwardRefExoticComponent<ListSquareCursorProps & RefAttributes<SVGSVGElement>>;

export default ListSquareCursor;
export { ListSquareCursor };
