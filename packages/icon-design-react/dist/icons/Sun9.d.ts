import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun9Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun9: ForwardRefExoticComponent<Sun9Props & RefAttributes<SVGSVGElement>>;

export default Sun9;
export { Sun9 };
