import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListRightDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListRightDash: ForwardRefExoticComponent<ListRightDashProps & RefAttributes<SVGSVGElement>>;

export default ListRightDash;
export { ListRightDash };
