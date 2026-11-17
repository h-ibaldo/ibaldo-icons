import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashArrowUp: ForwardRefExoticComponent<TrashArrowUpProps & RefAttributes<SVGSVGElement>>;

export default TrashArrowUp;
export { TrashArrowUp };
