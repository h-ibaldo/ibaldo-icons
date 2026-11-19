import type { DefineComponent } from 'vue';

export interface CookieProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Cookie: DefineComponent<CookieProps>;

export default Cookie;
export { Cookie };
