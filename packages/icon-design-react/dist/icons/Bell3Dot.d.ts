import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell3DotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell3Dot: ForwardRefExoticComponent<Bell3DotProps & RefAttributes<SVGSVGElement>>;

export default Bell3Dot;
export { Bell3Dot };
