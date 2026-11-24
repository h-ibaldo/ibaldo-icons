import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EraserProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Eraser: ForwardRefExoticComponent<EraserProps & RefAttributes<SVGSVGElement>>;

export default Eraser;
export { Eraser };
