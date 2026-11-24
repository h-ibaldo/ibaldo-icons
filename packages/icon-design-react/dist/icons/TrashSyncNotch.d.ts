import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashSyncNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashSyncNotch: ForwardRefExoticComponent<TrashSyncNotchProps & RefAttributes<SVGSVGElement>>;

export default TrashSyncNotch;
export { TrashSyncNotch };
