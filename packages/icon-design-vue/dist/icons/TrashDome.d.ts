import type { DefineComponent } from 'vue';

export interface TrashDomeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashDome: DefineComponent<TrashDomeProps>;

export default TrashDome;
export { TrashDome };
