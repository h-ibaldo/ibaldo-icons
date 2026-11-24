import type { DefineComponent } from 'vue';

export interface BrowserTrafficLightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserTrafficLight: DefineComponent<BrowserTrafficLightProps>;

export default BrowserTrafficLight;
export { BrowserTrafficLight };
