import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowStack: ForwardRefExoticComponent<WindowStackProps & RefAttributes<SVGSVGElement>>;

export default WindowStack;
export { WindowStack };
