import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashSync: ForwardRefExoticComponent<TrashSyncProps & RefAttributes<SVGSVGElement>>;

export default TrashSync;
export { TrashSync };
