import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CakeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cake: ForwardRefExoticComponent<CakeProps & RefAttributes<SVGSVGElement>>;

export default Cake;
export { Cake };
