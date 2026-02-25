import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun82Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun82: ForwardRefExoticComponent<Sun82Props & RefAttributes<SVGSVGElement>>;

export default Sun82;
export { Sun82 };
