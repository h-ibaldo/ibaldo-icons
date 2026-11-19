import type { DefineComponent } from 'vue';

export interface PlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Plus: DefineComponent<PlusProps>;

export default Plus;
export { Plus };
