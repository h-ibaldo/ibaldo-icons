import type { DefineComponent } from 'vue';

export interface NewspaperTornProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NewspaperTorn: DefineComponent<NewspaperTornProps>;

export default NewspaperTorn;
export { NewspaperTorn };
