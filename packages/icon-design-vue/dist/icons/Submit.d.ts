import type { DefineComponent } from 'vue';

export interface SubmitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Submit: DefineComponent<SubmitProps>;

export default Submit;
export { Submit };
