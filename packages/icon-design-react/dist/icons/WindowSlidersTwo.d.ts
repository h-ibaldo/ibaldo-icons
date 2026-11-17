import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSlidersTwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSlidersTwo: ForwardRefExoticComponent<WindowSlidersTwoProps & RefAttributes<SVGSVGElement>>;

export default WindowSlidersTwo;
export { WindowSlidersTwo };
