import type { DefineComponent } from 'vue';

export interface ScissorsDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScissorsDotted: DefineComponent<ScissorsDottedProps>;

export default ScissorsDotted;
export { ScissorsDotted };
