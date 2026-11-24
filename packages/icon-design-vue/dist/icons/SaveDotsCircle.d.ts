import type { DefineComponent } from 'vue';

export interface SaveDotsCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SaveDotsCircle: DefineComponent<SaveDotsCircleProps>;

export default SaveDotsCircle;
export { SaveDotsCircle };
