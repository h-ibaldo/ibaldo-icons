import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListNumbered2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListNumbered2: ForwardRefExoticComponent<ListNumbered2Props & RefAttributes<SVGSVGElement>>;

export default ListNumbered2;
export { ListNumbered2 };
