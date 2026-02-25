import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun92Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun92: ForwardRefExoticComponent<Sun92Props & RefAttributes<SVGSVGElement>>;

export default Sun92;
export { Sun92 };
