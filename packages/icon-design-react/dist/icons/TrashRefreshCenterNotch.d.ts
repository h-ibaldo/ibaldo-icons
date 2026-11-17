import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashRefreshCenterNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashRefreshCenterNotch: ForwardRefExoticComponent<TrashRefreshCenterNotchProps & RefAttributes<SVGSVGElement>>;

export default TrashRefreshCenterNotch;
export { TrashRefreshCenterNotch };
