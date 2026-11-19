import type { DefineComponent } from 'vue';

export interface AtSyncBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtSyncBoxy: DefineComponent<AtSyncBoxyProps>;

export default AtSyncBoxy;
export { AtSyncBoxy };
