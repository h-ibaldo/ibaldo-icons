import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun12: ForwardRefExoticComponent<Sun12Props & RefAttributes<SVGSVGElement>>;

export default Sun12;
export { Sun12 };
