import type { DefineComponent } from 'vue';

export interface DotsVerticalHollowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DotsVerticalHollow: DefineComponent<DotsVerticalHollowProps>;

export default DotsVerticalHollow;
export { DotsVerticalHollow };
