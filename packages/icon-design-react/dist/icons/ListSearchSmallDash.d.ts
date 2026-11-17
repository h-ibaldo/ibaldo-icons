import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListSearchSmallDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListSearchSmallDash: ForwardRefExoticComponent<ListSearchSmallDashProps & RefAttributes<SVGSVGElement>>;

export default ListSearchSmallDash;
export { ListSearchSmallDash };
