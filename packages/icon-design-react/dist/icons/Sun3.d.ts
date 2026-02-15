import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun3: ForwardRefExoticComponent<Sun3Props & RefAttributes<SVGSVGElement>>;

export default Sun3;
export { Sun3 };
