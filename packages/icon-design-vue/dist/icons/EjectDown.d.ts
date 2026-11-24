import type { DefineComponent } from 'vue';

export interface EjectDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EjectDown: DefineComponent<EjectDownProps>;

export default EjectDown;
export { EjectDown };
