import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListUserDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListUserDash: ForwardRefExoticComponent<ListUserDashProps & RefAttributes<SVGSVGElement>>;

export default ListUserDash;
export { ListUserDash };
