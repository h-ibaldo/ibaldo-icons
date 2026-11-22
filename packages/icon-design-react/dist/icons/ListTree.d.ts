import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListTreeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListTree: ForwardRefExoticComponent<ListTreeProps & RefAttributes<SVGSVGElement>>;

export default ListTree;
export { ListTree };
