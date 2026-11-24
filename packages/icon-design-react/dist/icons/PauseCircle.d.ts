import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PauseCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PauseCircle: ForwardRefExoticComponent<PauseCircleProps & RefAttributes<SVGSVGElement>>;

export default PauseCircle;
export { PauseCircle };
