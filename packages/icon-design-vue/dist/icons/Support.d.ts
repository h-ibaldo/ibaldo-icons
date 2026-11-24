import type { DefineComponent } from 'vue';

export interface SupportProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Support: DefineComponent<SupportProps>;

export default Support;
export { Support };
