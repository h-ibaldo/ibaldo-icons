import type { DefineComponent } from 'vue';

export interface DiagramDecisionProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DiagramDecision: DefineComponent<DiagramDecisionProps>;

export default DiagramDecision;
export { DiagramDecision };
