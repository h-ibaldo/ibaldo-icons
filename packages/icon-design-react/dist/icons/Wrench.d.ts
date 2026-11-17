import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WrenchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Wrench: ForwardRefExoticComponent<WrenchProps & RefAttributes<SVGSVGElement>>;

export default Wrench;
export { Wrench };
