import type { DefineComponent } from 'vue';

export interface SavePlusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SavePlusCircle: DefineComponent<SavePlusCircleProps>;

export default SavePlusCircle;
export { SavePlusCircle };
