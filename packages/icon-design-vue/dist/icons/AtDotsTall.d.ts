import type { DefineComponent } from 'vue';

export interface AtDotsTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtDotsTall: DefineComponent<AtDotsTallProps>;

export default AtDotsTall;
export { AtDotsTall };
