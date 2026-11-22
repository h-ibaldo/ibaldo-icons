import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListRefreshProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListRefresh: ForwardRefExoticComponent<ListRefreshProps & RefAttributes<SVGSVGElement>>;

export default ListRefresh;
export { ListRefresh };
