import type { DefineComponent } from 'vue';

export interface ScissorsClosedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScissorsClosed: DefineComponent<ScissorsClosedProps>;

export default ScissorsClosed;
export { ScissorsClosed };
