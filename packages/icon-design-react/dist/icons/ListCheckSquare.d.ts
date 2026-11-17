import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListCheckSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListCheckSquare: ForwardRefExoticComponent<ListCheckSquareProps & RefAttributes<SVGSVGElement>>;

export default ListCheckSquare;
export { ListCheckSquare };
