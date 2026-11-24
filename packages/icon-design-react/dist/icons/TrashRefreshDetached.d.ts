import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashRefreshDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashRefreshDetached: ForwardRefExoticComponent<TrashRefreshDetachedProps & RefAttributes<SVGSVGElement>>;

export default TrashRefreshDetached;
export { TrashRefreshDetached };
