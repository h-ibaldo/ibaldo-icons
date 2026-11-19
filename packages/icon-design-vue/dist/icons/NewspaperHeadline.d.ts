import type { DefineComponent } from 'vue';

export interface NewspaperHeadlineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NewspaperHeadline: DefineComponent<NewspaperHeadlineProps>;

export default NewspaperHeadline;
export { NewspaperHeadline };
