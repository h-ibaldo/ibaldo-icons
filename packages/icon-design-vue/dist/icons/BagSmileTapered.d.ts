import type { DefineComponent } from 'vue';

export interface BagSmileTaperedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BagSmileTapered: DefineComponent<BagSmileTaperedProps>;

export default BagSmileTapered;
export { BagSmileTapered };
