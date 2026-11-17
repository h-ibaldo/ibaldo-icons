import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListStatusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListStatus: ForwardRefExoticComponent<ListStatusProps & RefAttributes<SVGSVGElement>>;

export default ListStatus;
export { ListStatus };
