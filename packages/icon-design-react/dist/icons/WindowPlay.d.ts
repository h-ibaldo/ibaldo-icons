import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPlayProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPlay: ForwardRefExoticComponent<WindowPlayProps & RefAttributes<SVGSVGElement>>;

export default WindowPlay;
export { WindowPlay };
