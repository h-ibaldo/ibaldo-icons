import type { DefineComponent } from 'vue';

export interface WindowModalTitledProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowModalTitled: DefineComponent<WindowModalTitledProps>;

export default WindowModalTitled;
export { WindowModalTitled };
