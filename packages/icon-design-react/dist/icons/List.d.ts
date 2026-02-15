import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const List: ForwardRefExoticComponent<ListProps & RefAttributes<SVGSVGElement>>;

export default List;
export { List };
