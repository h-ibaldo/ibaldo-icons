import type { DefineComponent } from 'vue';

export interface PlusSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PlusSmall: DefineComponent<PlusSmallProps>;

export default PlusSmall;
export { PlusSmall };
