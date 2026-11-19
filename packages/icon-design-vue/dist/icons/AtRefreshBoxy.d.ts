import type { DefineComponent } from 'vue';

export interface AtRefreshBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtRefreshBoxy: DefineComponent<AtRefreshBoxyProps>;

export default AtRefreshBoxy;
export { AtRefreshBoxy };
