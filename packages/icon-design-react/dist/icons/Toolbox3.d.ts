import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Toolbox3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Toolbox3: ForwardRefExoticComponent<Toolbox3Props & RefAttributes<SVGSVGElement>>;

export default Toolbox3;
export { Toolbox3 };
