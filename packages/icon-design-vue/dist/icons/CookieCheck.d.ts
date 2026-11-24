import type { DefineComponent } from 'vue';

export interface CookieCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CookieCheck: DefineComponent<CookieCheckProps>;

export default CookieCheck;
export { CookieCheck };
