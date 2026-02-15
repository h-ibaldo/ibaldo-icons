import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Toolbox2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Toolbox2: ForwardRefExoticComponent<Toolbox2Props & RefAttributes<SVGSVGElement>>;

export default Toolbox2;
export { Toolbox2 };
