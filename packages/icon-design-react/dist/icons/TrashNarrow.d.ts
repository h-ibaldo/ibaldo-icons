import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashNarrow: ForwardRefExoticComponent<TrashNarrowProps & RefAttributes<SVGSVGElement>>;

export default TrashNarrow;
export { TrashNarrow };
