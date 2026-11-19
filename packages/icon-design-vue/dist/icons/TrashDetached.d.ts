import type { DefineComponent } from 'vue';

export interface TrashDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashDetached: DefineComponent<TrashDetachedProps>;

export default TrashDetached;
export { TrashDetached };
