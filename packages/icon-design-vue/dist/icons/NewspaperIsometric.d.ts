import type { DefineComponent } from 'vue';

export interface NewspaperIsometricProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NewspaperIsometric: DefineComponent<NewspaperIsometricProps>;

export default NewspaperIsometric;
export { NewspaperIsometric };
