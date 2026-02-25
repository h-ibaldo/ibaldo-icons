import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun42: ForwardRefExoticComponent<Sun42Props & RefAttributes<SVGSVGElement>>;

export default Sun42;
export { Sun42 };
