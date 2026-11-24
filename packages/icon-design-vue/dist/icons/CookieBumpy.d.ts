import type { DefineComponent } from 'vue';

export interface CookieBumpyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CookieBumpy: DefineComponent<CookieBumpyProps>;

export default CookieBumpy;
export { CookieBumpy };
