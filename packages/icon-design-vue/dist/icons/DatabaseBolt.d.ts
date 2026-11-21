import type { DefineComponent } from 'vue';

export interface DatabaseBoltProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DatabaseBolt: DefineComponent<DatabaseBoltProps>;

export default DatabaseBolt;
export { DatabaseBolt };
