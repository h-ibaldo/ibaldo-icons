import type { DefineComponent } from 'vue';

export interface AlarmPieProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmPie: DefineComponent<AlarmPieProps>;

export default AlarmPie;
export { AlarmPie };
