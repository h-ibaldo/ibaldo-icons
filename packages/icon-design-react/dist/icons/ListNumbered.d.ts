import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListNumberedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListNumbered: ForwardRefExoticComponent<ListNumberedProps & RefAttributes<SVGSVGElement>>;

export default ListNumbered;
export { ListNumbered };
