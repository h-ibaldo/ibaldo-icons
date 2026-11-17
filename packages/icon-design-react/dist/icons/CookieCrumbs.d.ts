import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CookieCrumbsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CookieCrumbs: ForwardRefExoticComponent<CookieCrumbsProps & RefAttributes<SVGSVGElement>>;

export default CookieCrumbs;
export { CookieCrumbs };
