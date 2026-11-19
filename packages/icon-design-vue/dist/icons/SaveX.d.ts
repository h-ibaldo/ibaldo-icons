import type { DefineComponent } from 'vue';

export interface SaveXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SaveX: DefineComponent<SaveXProps>;

export default SaveX;
export { SaveX };
