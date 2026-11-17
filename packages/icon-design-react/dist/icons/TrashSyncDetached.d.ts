import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashSyncDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashSyncDetached: ForwardRefExoticComponent<TrashSyncDetachedProps & RefAttributes<SVGSVGElement>>;

export default TrashSyncDetached;
export { TrashSyncDetached };
