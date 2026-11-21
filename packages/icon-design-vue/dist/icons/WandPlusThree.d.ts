import type { DefineComponent } from 'vue';

export interface WandPlusThreeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WandPlusThree: DefineComponent<WandPlusThreeProps>;

export default WandPlusThree;
export { WandPlusThree };
