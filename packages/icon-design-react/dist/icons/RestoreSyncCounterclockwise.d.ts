import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RestoreSyncCounterclockwiseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RestoreSyncCounterclockwise: ForwardRefExoticComponent<RestoreSyncCounterclockwiseProps & RefAttributes<SVGSVGElement>>;

export default RestoreSyncCounterclockwise;
export { RestoreSyncCounterclockwise };
