import type { DefineComponent } from 'vue';

export interface BroomPlusThreeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BroomPlusThree: DefineComponent<BroomPlusThreeProps>;

export default BroomPlusThree;
export { BroomPlusThree };
