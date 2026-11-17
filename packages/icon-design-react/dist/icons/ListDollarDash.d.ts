import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListDollarDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListDollarDash: ForwardRefExoticComponent<ListDollarDashProps & RefAttributes<SVGSVGElement>>;

export default ListDollarDash;
export { ListDollarDash };
