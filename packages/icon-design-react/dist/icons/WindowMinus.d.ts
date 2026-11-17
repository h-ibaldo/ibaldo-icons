import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowMinus: ForwardRefExoticComponent<WindowMinusProps & RefAttributes<SVGSVGElement>>;

export default WindowMinus;
export { WindowMinus };
