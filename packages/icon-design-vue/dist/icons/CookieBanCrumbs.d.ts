import type { DefineComponent } from 'vue';

export interface CookieBanCrumbsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CookieBanCrumbs: DefineComponent<CookieBanCrumbsProps>;

export default CookieBanCrumbs;
export { CookieBanCrumbs };
