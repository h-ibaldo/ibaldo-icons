import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PauseSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PauseSquare: ForwardRefExoticComponent<PauseSquareProps & RefAttributes<SVGSVGElement>>;

export default PauseSquare;
export { PauseSquare };
