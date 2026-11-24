import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashXNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashXNotch: ForwardRefExoticComponent<TrashXNotchProps & RefAttributes<SVGSVGElement>>;

export default TrashXNotch;
export { TrashXNotch };
