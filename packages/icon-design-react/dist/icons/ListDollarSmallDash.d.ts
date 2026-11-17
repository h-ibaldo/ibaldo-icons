import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListDollarSmallDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListDollarSmallDash: ForwardRefExoticComponent<ListDollarSmallDashProps & RefAttributes<SVGSVGElement>>;

export default ListDollarSmallDash;
export { ListDollarSmallDash };
