import type { DefineComponent } from 'vue';

export interface NewspaperRolledProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NewspaperRolled: DefineComponent<NewspaperRolledProps>;

export default NewspaperRolled;
export { NewspaperRolled };
