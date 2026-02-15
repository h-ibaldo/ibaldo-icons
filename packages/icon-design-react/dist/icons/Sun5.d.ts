import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun5: ForwardRefExoticComponent<Sun5Props & RefAttributes<SVGSVGElement>>;

export default Sun5;
export { Sun5 };
