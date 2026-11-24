import type { DefineComponent } from 'vue';

export interface CookieCrumbsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CookieCrumbs: DefineComponent<CookieCrumbsProps>;

export default CookieCrumbs;
export { CookieCrumbs };
