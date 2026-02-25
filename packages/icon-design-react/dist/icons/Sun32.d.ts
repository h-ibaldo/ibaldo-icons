import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun32: ForwardRefExoticComponent<Sun32Props & RefAttributes<SVGSVGElement>>;

export default Sun32;
export { Sun32 };
