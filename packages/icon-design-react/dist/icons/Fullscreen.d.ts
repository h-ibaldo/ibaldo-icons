import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FullscreenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Fullscreen: ForwardRefExoticComponent<FullscreenProps & RefAttributes<SVGSVGElement>>;

export default Fullscreen;
export { Fullscreen };
