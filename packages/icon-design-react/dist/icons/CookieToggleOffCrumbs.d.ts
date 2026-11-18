import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CookieToggleOffCrumbsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CookieToggleOffCrumbs: ForwardRefExoticComponent<CookieToggleOffCrumbsProps & RefAttributes<SVGSVGElement>>;

export default CookieToggleOffCrumbs;
export { CookieToggleOffCrumbs };
