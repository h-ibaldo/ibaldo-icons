import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Scanner3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Scanner3: ForwardRefExoticComponent<Scanner3Props & RefAttributes<SVGSVGElement>>;

export default Scanner3;
export { Scanner3 };
