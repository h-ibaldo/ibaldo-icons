import type { DefineComponent } from 'vue';

export interface PencilDetailedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilDetailed: DefineComponent<PencilDetailedProps>;

export default PencilDetailed;
export { PencilDetailed };
