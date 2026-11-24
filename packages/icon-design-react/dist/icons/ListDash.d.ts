import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListDash: ForwardRefExoticComponent<ListDashProps & RefAttributes<SVGSVGElement>>;

export default ListDash;
export { ListDash };
