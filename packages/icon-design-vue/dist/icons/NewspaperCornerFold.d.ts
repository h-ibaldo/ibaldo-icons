import type { DefineComponent } from 'vue';

export interface NewspaperCornerFoldProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NewspaperCornerFold: DefineComponent<NewspaperCornerFoldProps>;

export default NewspaperCornerFold;
export { NewspaperCornerFold };
