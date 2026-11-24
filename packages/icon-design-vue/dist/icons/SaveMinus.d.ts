import type { DefineComponent } from 'vue';

export interface SaveMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SaveMinus: DefineComponent<SaveMinusProps>;

export default SaveMinus;
export { SaveMinus };
