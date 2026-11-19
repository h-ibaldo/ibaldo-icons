import type { DefineComponent } from 'vue';

export interface ArrowOrbitSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowOrbitSync: DefineComponent<ArrowOrbitSyncProps>;

export default ArrowOrbitSync;
export { ArrowOrbitSync };
