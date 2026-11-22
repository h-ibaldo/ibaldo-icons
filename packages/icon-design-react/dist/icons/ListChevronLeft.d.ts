import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListChevronLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListChevronLeft: ForwardRefExoticComponent<ListChevronLeftProps & RefAttributes<SVGSVGElement>>;

export default ListChevronLeft;
export { ListChevronLeft };
