import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListX: ForwardRefExoticComponent<ListXProps & RefAttributes<SVGSVGElement>>;

export default ListX;
export { ListX };
