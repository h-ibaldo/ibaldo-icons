import type { DefineComponent } from 'vue';

export interface EyeLiddedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyeLidded: DefineComponent<EyeLiddedProps>;

export default EyeLidded;
export { EyeLidded };
