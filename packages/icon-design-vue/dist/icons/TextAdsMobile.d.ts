import type { DefineComponent } from 'vue';

export interface TextAdsMobileProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAdsMobile: DefineComponent<TextAdsMobileProps>;

export default TextAdsMobile;
export { TextAdsMobile };
