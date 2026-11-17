import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListUserSmallDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListUserSmallDash: ForwardRefExoticComponent<ListUserSmallDashProps & RefAttributes<SVGSVGElement>>;

export default ListUserSmallDash;
export { ListUserSmallDash };
