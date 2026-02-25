import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun62Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun62: ForwardRefExoticComponent<Sun62Props & RefAttributes<SVGSVGElement>>;

export default Sun62;
export { Sun62 };
