import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListCircleXTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListCircleXTop: ForwardRefExoticComponent<ListCircleXTopProps & RefAttributes<SVGSVGElement>>;

export default ListCircleXTop;
export { ListCircleXTop };
