import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowControlMinimizeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowControlMinimize: ForwardRefExoticComponent<WindowControlMinimizeProps & RefAttributes<SVGSVGElement>>;

export default WindowControlMinimize;
export { WindowControlMinimize };
