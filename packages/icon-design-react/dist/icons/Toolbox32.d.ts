import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Toolbox32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Toolbox32: ForwardRefExoticComponent<Toolbox32Props & RefAttributes<SVGSVGElement>>;

export default Toolbox32;
export { Toolbox32 };
