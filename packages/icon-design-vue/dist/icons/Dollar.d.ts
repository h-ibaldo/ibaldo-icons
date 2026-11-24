import type { DefineComponent } from 'vue';

export interface DollarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Dollar: DefineComponent<DollarProps>;

export default Dollar;
export { Dollar };
