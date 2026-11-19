import type { DefineComponent } from 'vue';

export interface MedalCheckStrapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MedalCheckStrap: DefineComponent<MedalCheckStrapProps>;

export default MedalCheckStrap;
export { MedalCheckStrap };
