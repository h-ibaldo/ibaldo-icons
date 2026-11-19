import type { DefineComponent } from 'vue';

export interface MedalHookProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MedalHook: DefineComponent<MedalHookProps>;

export default MedalHook;
export { MedalHook };
