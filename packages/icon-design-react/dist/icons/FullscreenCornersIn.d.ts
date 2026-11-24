import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FullscreenCornersInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FullscreenCornersIn: ForwardRefExoticComponent<FullscreenCornersInProps & RefAttributes<SVGSVGElement>>;

export default FullscreenCornersIn;
export { FullscreenCornersIn };
