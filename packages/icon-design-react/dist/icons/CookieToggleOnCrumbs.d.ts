import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CookieToggleOnCrumbsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CookieToggleOnCrumbs: ForwardRefExoticComponent<CookieToggleOnCrumbsProps & RefAttributes<SVGSVGElement>>;

export default CookieToggleOnCrumbs;
export { CookieToggleOnCrumbs };
