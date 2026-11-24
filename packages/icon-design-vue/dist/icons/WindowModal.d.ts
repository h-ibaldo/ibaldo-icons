import type { DefineComponent } from 'vue';

export interface WindowModalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowModal: DefineComponent<WindowModalProps>;

export default WindowModal;
export { WindowModal };
