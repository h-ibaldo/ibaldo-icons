import type { DefineComponent } from 'vue';

export interface TrashTaperedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashTapered: DefineComponent<TrashTaperedProps>;

export default TrashTapered;
export { TrashTapered };
