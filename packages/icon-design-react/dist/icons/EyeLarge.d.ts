import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeLarge: ForwardRefExoticComponent<EyeLargeProps & RefAttributes<SVGSVGElement>>;

export default EyeLarge;
export { EyeLarge };
