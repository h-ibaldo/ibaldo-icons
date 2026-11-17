import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashDomeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashDome: ForwardRefExoticComponent<TrashDomeProps & RefAttributes<SVGSVGElement>>;

export default TrashDome;
export { TrashDome };
