import type { DefineComponent } from 'vue';

export interface MedalOneHookProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MedalOneHook: DefineComponent<MedalOneHookProps>;

export default MedalOneHook;
export { MedalOneHook };
