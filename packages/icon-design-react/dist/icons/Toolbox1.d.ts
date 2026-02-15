import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Toolbox1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Toolbox1: ForwardRefExoticComponent<Toolbox1Props & RefAttributes<SVGSVGElement>>;

export default Toolbox1;
export { Toolbox1 };
