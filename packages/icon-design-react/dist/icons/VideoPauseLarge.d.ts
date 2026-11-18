import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VideoPauseLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VideoPauseLarge: ForwardRefExoticComponent<VideoPauseLargeProps & RefAttributes<SVGSVGElement>>;

export default VideoPauseLarge;
export { VideoPauseLarge };
