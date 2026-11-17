import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSlidersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSliders: ForwardRefExoticComponent<WindowSlidersProps & RefAttributes<SVGSVGElement>>;

export default WindowSliders;
export { WindowSliders };
