import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun7Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun7: ForwardRefExoticComponent<Sun7Props & RefAttributes<SVGSVGElement>>;

export default Sun7;
export { Sun7 };
