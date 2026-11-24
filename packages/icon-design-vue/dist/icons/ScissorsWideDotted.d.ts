import type { DefineComponent } from 'vue';

export interface ScissorsWideDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScissorsWideDotted: DefineComponent<ScissorsWideDottedProps>;

export default ScissorsWideDotted;
export { ScissorsWideDotted };
