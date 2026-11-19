import type { DefineComponent } from 'vue';

export interface PollCheckXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PollCheckX: DefineComponent<PollCheckXProps>;

export default PollCheckX;
export { PollCheckX };
