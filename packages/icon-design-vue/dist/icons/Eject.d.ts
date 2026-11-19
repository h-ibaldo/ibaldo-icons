import type { DefineComponent } from 'vue';

export interface EjectProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Eject: DefineComponent<EjectProps>;

export default Eject;
export { Eject };
