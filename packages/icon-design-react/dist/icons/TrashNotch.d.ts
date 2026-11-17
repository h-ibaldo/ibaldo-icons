import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashNotch: ForwardRefExoticComponent<TrashNotchProps & RefAttributes<SVGSVGElement>>;

export default TrashNotch;
export { TrashNotch };
