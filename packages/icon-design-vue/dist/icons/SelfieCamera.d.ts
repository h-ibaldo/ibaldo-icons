import type { DefineComponent } from 'vue';

export interface SelfieCameraProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SelfieCamera: DefineComponent<SelfieCameraProps>;

export default SelfieCamera;
export { SelfieCamera };
