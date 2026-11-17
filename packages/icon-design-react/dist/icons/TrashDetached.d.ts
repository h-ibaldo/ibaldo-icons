import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashDetached: ForwardRefExoticComponent<TrashDetachedProps & RefAttributes<SVGSVGElement>>;

export default TrashDetached;
export { TrashDetached };
