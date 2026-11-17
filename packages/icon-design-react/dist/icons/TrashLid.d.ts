import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashLidProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashLid: ForwardRefExoticComponent<TrashLidProps & RefAttributes<SVGSVGElement>>;

export default TrashLid;
export { TrashLid };
