import type { DefineComponent } from 'vue';

export interface FlagLeftNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlagLeftNotched: DefineComponent<FlagLeftNotchedProps>;

export default FlagLeftNotched;
export { FlagLeftNotched };
