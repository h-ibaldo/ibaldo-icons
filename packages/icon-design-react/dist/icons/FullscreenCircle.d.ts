import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FullscreenCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FullscreenCircle: ForwardRefExoticComponent<FullscreenCircleProps & RefAttributes<SVGSVGElement>>;

export default FullscreenCircle;
export { FullscreenCircle };
