import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface List2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const List2: ForwardRefExoticComponent<List2Props & RefAttributes<SVGSVGElement>>;

export default List2;
export { List2 };
