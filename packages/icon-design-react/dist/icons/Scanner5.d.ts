import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Scanner5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Scanner5: ForwardRefExoticComponent<Scanner5Props & RefAttributes<SVGSVGElement>>;

export default Scanner5;
export { Scanner5 };
