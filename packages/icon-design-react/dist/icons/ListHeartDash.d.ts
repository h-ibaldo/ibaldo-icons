import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListHeartDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListHeartDash: ForwardRefExoticComponent<ListHeartDashProps & RefAttributes<SVGSVGElement>>;

export default ListHeartDash;
export { ListHeartDash };
