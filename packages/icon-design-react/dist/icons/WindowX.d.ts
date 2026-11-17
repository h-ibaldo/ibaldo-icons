import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowX: ForwardRefExoticComponent<WindowXProps & RefAttributes<SVGSVGElement>>;

export default WindowX;
export { WindowX };
