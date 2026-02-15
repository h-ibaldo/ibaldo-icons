import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun6Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun6: ForwardRefExoticComponent<Sun6Props & RefAttributes<SVGSVGElement>>;

export default Sun6;
export { Sun6 };
