import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CookieBumpyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CookieBumpy: ForwardRefExoticComponent<CookieBumpyProps & RefAttributes<SVGSVGElement>>;

export default CookieBumpy;
export { CookieBumpy };
