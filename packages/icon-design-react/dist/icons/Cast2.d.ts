import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cast2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cast2: ForwardRefExoticComponent<Cast2Props & RefAttributes<SVGSVGElement>>;

export default Cast2;
export { Cast2 };
