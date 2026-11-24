import type { DefineComponent } from 'vue';

export interface NewspaperProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Newspaper: DefineComponent<NewspaperProps>;

export default Newspaper;
export { Newspaper };
