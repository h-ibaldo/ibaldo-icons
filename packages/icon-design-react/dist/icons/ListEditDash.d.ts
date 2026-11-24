import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListEditDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListEditDash: ForwardRefExoticComponent<ListEditDashProps & RefAttributes<SVGSVGElement>>;

export default ListEditDash;
export { ListEditDash };
