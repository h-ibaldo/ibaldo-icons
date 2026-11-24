import type { DefineComponent } from 'vue';

export interface AlarmBoltProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmBolt: DefineComponent<AlarmBoltProps>;

export default AlarmBolt;
export { AlarmBolt };
