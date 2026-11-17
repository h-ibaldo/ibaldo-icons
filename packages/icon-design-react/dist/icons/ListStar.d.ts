import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListStarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListStar: ForwardRefExoticComponent<ListStarProps & RefAttributes<SVGSVGElement>>;

export default ListStar;
export { ListStar };
