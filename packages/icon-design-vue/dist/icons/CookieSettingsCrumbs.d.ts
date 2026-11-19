import type { DefineComponent } from 'vue';

export interface CookieSettingsCrumbsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CookieSettingsCrumbs: DefineComponent<CookieSettingsCrumbsProps>;

export default CookieSettingsCrumbs;
export { CookieSettingsCrumbs };
