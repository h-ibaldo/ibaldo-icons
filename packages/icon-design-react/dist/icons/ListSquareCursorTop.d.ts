import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListSquareCursorTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListSquareCursorTop: ForwardRefExoticComponent<ListSquareCursorTopProps & RefAttributes<SVGSVGElement>>;

export default ListSquareCursorTop;
export { ListSquareCursorTop };
