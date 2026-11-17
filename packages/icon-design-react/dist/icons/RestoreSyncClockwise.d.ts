import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RestoreSyncClockwiseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RestoreSyncClockwise: ForwardRefExoticComponent<RestoreSyncClockwiseProps & RefAttributes<SVGSVGElement>>;

export default RestoreSyncClockwise;
export { RestoreSyncClockwise };
