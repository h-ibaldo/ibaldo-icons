import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListCheckDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListCheckDash: ForwardRefExoticComponent<ListCheckDashProps & RefAttributes<SVGSVGElement>>;

export default ListCheckDash;
export { ListCheckDash };
