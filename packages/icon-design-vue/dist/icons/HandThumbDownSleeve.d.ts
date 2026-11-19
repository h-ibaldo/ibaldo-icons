import type { DefineComponent } from 'vue';

export interface HandThumbDownSleeveProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandThumbDownSleeve: DefineComponent<HandThumbDownSleeveProps>;

export default HandThumbDownSleeve;
export { HandThumbDownSleeve };
