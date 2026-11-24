import type { DefineComponent } from 'vue';

export interface NewspaperStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NewspaperStack: DefineComponent<NewspaperStackProps>;

export default NewspaperStack;
export { NewspaperStack };
