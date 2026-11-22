import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FullscreenCornersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FullscreenCorners: ForwardRefExoticComponent<FullscreenCornersProps & RefAttributes<SVGSVGElement>>;

export default FullscreenCorners;
export { FullscreenCorners };
