import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun4: ForwardRefExoticComponent<Sun4Props & RefAttributes<SVGSVGElement>>;

export default Sun4;
export { Sun4 };
