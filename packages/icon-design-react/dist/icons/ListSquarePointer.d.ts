import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListSquarePointerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListSquarePointer: ForwardRefExoticComponent<ListSquarePointerProps & RefAttributes<SVGSVGElement>>;

export default ListSquarePointer;
export { ListSquarePointer };
