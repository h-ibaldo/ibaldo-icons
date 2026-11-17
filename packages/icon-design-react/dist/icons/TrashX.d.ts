import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashX: ForwardRefExoticComponent<TrashXProps & RefAttributes<SVGSVGElement>>;

export default TrashX;
export { TrashX };
