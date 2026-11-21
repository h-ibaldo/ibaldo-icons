import type { DefineComponent } from 'vue';

export interface FlagNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlagNotched: DefineComponent<FlagNotchedProps>;

export default FlagNotched;
export { FlagNotched };
