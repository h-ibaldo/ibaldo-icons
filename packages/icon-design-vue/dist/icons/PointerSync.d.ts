import type { DefineComponent } from 'vue';

export interface PointerSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerSync: DefineComponent<PointerSyncProps>;

export default PointerSync;
export { PointerSync };
