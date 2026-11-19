import type { DefineComponent } from 'vue';

export interface MedalCheckHookProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MedalCheckHook: DefineComponent<MedalCheckHookProps>;

export default MedalCheckHook;
export { MedalCheckHook };
