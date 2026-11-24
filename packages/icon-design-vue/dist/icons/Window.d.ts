import type { DefineComponent } from 'vue';

export interface WindowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Window: DefineComponent<WindowProps>;

export default Window;
export { Window };
