import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun52Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun52: ForwardRefExoticComponent<Sun52Props & RefAttributes<SVGSVGElement>>;

export default Sun52;
export { Sun52 };
