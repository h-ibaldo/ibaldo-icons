import type { DefineComponent } from 'vue';

export interface MedalOneStrapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MedalOneStrap: DefineComponent<MedalOneStrapProps>;

export default MedalOneStrap;
export { MedalOneStrap };
