import type { DefineComponent } from 'vue';

export interface JustifyLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const JustifyLeft: DefineComponent<JustifyLeftProps>;

export default JustifyLeft;
export { JustifyLeft };
