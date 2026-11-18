import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListClockDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListClockDash: ForwardRefExoticComponent<ListClockDashProps & RefAttributes<SVGSVGElement>>;

export default ListClockDash;
export { ListClockDash };
