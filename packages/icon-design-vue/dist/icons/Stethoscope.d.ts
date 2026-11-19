import type { DefineComponent } from 'vue';

export interface StethoscopeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Stethoscope: DefineComponent<StethoscopeProps>;

export default Stethoscope;
export { Stethoscope };
