import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Eye: ForwardRefExoticComponent<EyeProps & RefAttributes<SVGSVGElement>>;

export default Eye;
export { Eye };
