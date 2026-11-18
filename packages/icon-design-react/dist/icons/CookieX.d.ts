import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CookieXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CookieX: ForwardRefExoticComponent<CookieXProps & RefAttributes<SVGSVGElement>>;

export default CookieX;
export { CookieX };
