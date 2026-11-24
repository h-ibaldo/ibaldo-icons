import type { DefineComponent } from 'vue';

export interface MedalOneProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MedalOne: DefineComponent<MedalOneProps>;

export default MedalOne;
export { MedalOne };
