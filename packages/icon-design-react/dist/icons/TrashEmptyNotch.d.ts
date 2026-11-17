import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashEmptyNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashEmptyNotch: ForwardRefExoticComponent<TrashEmptyNotchProps & RefAttributes<SVGSVGElement>>;

export default TrashEmptyNotch;
export { TrashEmptyNotch };
