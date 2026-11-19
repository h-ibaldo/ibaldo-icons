import type { DefineComponent } from 'vue';

export interface NewspaperTornWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NewspaperTornWide: DefineComponent<NewspaperTornWideProps>;

export default NewspaperTornWide;
export { NewspaperTornWide };
