import type { DefineComponent } from 'vue';

export interface PollHorizontalCheckboxProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PollHorizontalCheckbox: DefineComponent<PollHorizontalCheckboxProps>;

export default PollHorizontalCheckbox;
export { PollHorizontalCheckbox };
