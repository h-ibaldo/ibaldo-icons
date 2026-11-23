import type { DefineComponent } from 'vue';

export interface DraftingCompassProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DraftingCompass: DefineComponent<DraftingCompassProps>;

export default DraftingCompass;
export { DraftingCompass };
