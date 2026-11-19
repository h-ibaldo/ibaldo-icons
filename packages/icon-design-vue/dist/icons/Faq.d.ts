import type { DefineComponent } from 'vue';

export interface FaqProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Faq: DefineComponent<FaqProps>;

export default Faq;
export { Faq };
