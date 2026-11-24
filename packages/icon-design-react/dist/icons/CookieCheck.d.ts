import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CookieCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CookieCheck: ForwardRefExoticComponent<CookieCheckProps & RefAttributes<SVGSVGElement>>;

export default CookieCheck;
export { CookieCheck };
