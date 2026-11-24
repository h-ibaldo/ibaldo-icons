import type { DefineComponent } from 'vue';

export interface OverscanProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Overscan: DefineComponent<OverscanProps>;

export default Overscan;
export { Overscan };
