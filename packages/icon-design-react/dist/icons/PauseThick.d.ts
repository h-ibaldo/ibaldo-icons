import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PauseThickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PauseThick: ForwardRefExoticComponent<PauseThickProps & RefAttributes<SVGSVGElement>>;

export default PauseThick;
export { PauseThick };
