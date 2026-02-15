import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun1: ForwardRefExoticComponent<Sun1Props & RefAttributes<SVGSVGElement>>;

export default Sun1;
export { Sun1 };
