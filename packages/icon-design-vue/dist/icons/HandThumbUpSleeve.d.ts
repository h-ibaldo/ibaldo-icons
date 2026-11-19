import type { DefineComponent } from 'vue';

export interface HandThumbUpSleeveProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandThumbUpSleeve: DefineComponent<HandThumbUpSleeveProps>;

export default HandThumbUpSleeve;
export { HandThumbUpSleeve };
