import type { DefineComponent } from 'vue';

export interface ContactlessProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Contactless: DefineComponent<ContactlessProps>;

export default Contactless;
export { Contactless };
