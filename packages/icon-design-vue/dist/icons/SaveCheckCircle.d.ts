import type { DefineComponent } from 'vue';

export interface SaveCheckCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SaveCheckCircle: DefineComponent<SaveCheckCircleProps>;

export default SaveCheckCircle;
export { SaveCheckCircle };
