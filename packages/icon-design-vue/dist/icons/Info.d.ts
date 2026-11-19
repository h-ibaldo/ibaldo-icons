import type { DefineComponent } from 'vue';

export interface InfoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Info: DefineComponent<InfoProps>;

export default Info;
export { Info };
