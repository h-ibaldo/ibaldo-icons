import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashTaperedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashTapered: ForwardRefExoticComponent<TrashTaperedProps & RefAttributes<SVGSVGElement>>;

export default TrashTapered;
export { TrashTapered };
