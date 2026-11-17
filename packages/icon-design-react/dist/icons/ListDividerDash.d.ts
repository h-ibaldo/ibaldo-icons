import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListDividerDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListDividerDash: ForwardRefExoticComponent<ListDividerDashProps & RefAttributes<SVGSVGElement>>;

export default ListDividerDash;
export { ListDividerDash };
