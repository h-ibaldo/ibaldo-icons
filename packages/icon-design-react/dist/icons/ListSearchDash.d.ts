import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListSearchDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListSearchDash: ForwardRefExoticComponent<ListSearchDashProps & RefAttributes<SVGSVGElement>>;

export default ListSearchDash;
export { ListSearchDash };
