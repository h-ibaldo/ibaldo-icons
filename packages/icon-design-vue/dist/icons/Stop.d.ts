import type { DefineComponent } from 'vue';

export interface StopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Stop: DefineComponent<StopProps>;

export default Stop;
export { Stop };
