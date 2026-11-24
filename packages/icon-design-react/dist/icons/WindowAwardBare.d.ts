import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowAwardBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowAwardBare: ForwardRefExoticComponent<WindowAwardBareProps & RefAttributes<SVGSVGElement>>;

export default WindowAwardBare;
export { WindowAwardBare };
