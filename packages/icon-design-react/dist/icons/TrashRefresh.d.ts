import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashRefreshProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashRefresh: ForwardRefExoticComponent<TrashRefreshProps & RefAttributes<SVGSVGElement>>;

export default TrashRefresh;
export { TrashRefresh };
