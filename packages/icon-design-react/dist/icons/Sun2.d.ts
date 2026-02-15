import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun2: ForwardRefExoticComponent<Sun2Props & RefAttributes<SVGSVGElement>>;

export default Sun2;
export { Sun2 };
