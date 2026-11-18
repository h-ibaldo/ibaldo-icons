import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CookieBanCrumbsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CookieBanCrumbs: ForwardRefExoticComponent<CookieBanCrumbsProps & RefAttributes<SVGSVGElement>>;

export default CookieBanCrumbs;
export { CookieBanCrumbs };
