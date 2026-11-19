import type { DefineComponent } from 'vue';

export interface CookieXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CookieX: DefineComponent<CookieXProps>;

export default CookieX;
export { CookieX };
