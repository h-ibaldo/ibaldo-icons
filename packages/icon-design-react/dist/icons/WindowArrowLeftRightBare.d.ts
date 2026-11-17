import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowArrowLeftRightBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowArrowLeftRightBare: ForwardRefExoticComponent<WindowArrowLeftRightBareProps & RefAttributes<SVGSVGElement>>;

export default WindowArrowLeftRightBare;
export { WindowArrowLeftRightBare };
