import type { DefineComponent } from 'vue';

export interface PaperPlaneBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperPlaneBare: DefineComponent<PaperPlaneBareProps>;

export default PaperPlaneBare;
export { PaperPlaneBare };
