import type { DefineComponent } from 'vue';

export interface PollCheckboxProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PollCheckbox: DefineComponent<PollCheckboxProps>;

export default PollCheckbox;
export { PollCheckbox };
