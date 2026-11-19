import type { DefineComponent } from 'vue';

export interface AtProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const At: DefineComponent<AtProps>;

export default At;
export { At };
