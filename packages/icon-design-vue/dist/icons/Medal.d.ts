import type { DefineComponent } from 'vue';

export interface MedalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Medal: DefineComponent<MedalProps>;

export default Medal;
export { Medal };
