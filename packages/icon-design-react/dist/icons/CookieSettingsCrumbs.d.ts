import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CookieSettingsCrumbsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CookieSettingsCrumbs: ForwardRefExoticComponent<CookieSettingsCrumbsProps & RefAttributes<SVGSVGElement>>;

export default CookieSettingsCrumbs;
export { CookieSettingsCrumbs };
