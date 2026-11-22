import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListChevronRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListChevronRight: ForwardRefExoticComponent<ListChevronRightProps & RefAttributes<SVGSVGElement>>;

export default ListChevronRight;
export { ListChevronRight };
