import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashArrowUpTaperedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashArrowUpTapered: ForwardRefExoticComponent<TrashArrowUpTaperedProps & RefAttributes<SVGSVGElement>>;

export default TrashArrowUpTapered;
export { TrashArrowUpTapered };
