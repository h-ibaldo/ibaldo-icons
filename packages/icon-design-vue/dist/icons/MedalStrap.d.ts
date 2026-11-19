import type { DefineComponent } from 'vue';

export interface MedalStrapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MedalStrap: DefineComponent<MedalStrapProps>;

export default MedalStrap;
export { MedalStrap };
