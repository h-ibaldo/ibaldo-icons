import type { DefineComponent } from 'vue';

export interface UtilityKnifeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UtilityKnife: DefineComponent<UtilityKnifeProps>;

export default UtilityKnife;
export { UtilityKnife };
