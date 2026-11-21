import type { DefineComponent } from 'vue';

export interface PowerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Power: DefineComponent<PowerProps>;

export default Power;
export { Power };
