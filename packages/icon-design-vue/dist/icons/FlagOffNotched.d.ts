import type { DefineComponent } from 'vue';

export interface FlagOffNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlagOffNotched: DefineComponent<FlagOffNotchedProps>;

export default FlagOffNotched;
export { FlagOffNotched };
