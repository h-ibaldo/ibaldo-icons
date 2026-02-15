import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashDeleteX2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashDeleteX2: ForwardRefExoticComponent<TrashDeleteX2Props & RefAttributes<SVGSVGElement>>;

export default TrashDeleteX2;
export { TrashDeleteX2 };
