import type { DefineComponent } from 'vue';

export interface SaveXCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SaveXCircle: DefineComponent<SaveXCircleProps>;

export default SaveXCircle;
export { SaveXCircle };
