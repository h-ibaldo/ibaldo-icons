import type { DefineComponent } from 'vue';

export interface SupportOvalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SupportOval: DefineComponent<SupportOvalProps>;

export default SupportOval;
export { SupportOval };
