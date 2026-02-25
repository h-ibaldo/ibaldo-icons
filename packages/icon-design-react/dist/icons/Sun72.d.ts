import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun72Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun72: ForwardRefExoticComponent<Sun72Props & RefAttributes<SVGSVGElement>>;

export default Sun72;
export { Sun72 };
