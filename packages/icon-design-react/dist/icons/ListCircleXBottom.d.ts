import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListCircleXBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListCircleXBottom: ForwardRefExoticComponent<ListCircleXBottomProps & RefAttributes<SVGSVGElement>>;

export default ListCircleXBottom;
export { ListCircleXBottom };
