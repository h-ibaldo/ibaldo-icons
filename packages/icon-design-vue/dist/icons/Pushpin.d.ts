import type { DefineComponent } from 'vue';

export interface PushpinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Pushpin: DefineComponent<PushpinProps>;

export default Pushpin;
export { Pushpin };
