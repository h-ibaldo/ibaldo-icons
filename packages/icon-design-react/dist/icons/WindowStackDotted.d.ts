import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowStackDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowStackDotted: ForwardRefExoticComponent<WindowStackDottedProps & RefAttributes<SVGSVGElement>>;

export default WindowStackDotted;
export { WindowStackDotted };
