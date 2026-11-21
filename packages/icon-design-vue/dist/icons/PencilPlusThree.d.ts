import type { DefineComponent } from 'vue';

export interface PencilPlusThreeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilPlusThree: DefineComponent<PencilPlusThreeProps>;

export default PencilPlusThree;
export { PencilPlusThree };
