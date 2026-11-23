import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LassoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lasso: ForwardRefExoticComponent<LassoProps & RefAttributes<SVGSVGElement>>;

export default Lasso;
export { Lasso };
