import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun22Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun22: ForwardRefExoticComponent<Sun22Props & RefAttributes<SVGSVGElement>>;

export default Sun22;
export { Sun22 };
