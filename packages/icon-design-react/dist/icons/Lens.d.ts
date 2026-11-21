import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LensProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lens: ForwardRefExoticComponent<LensProps & RefAttributes<SVGSVGElement>>;

export default Lens;
export { Lens };
