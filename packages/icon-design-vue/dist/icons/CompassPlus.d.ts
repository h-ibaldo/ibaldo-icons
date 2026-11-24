import type { DefineComponent } from 'vue';

export interface CompassPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CompassPlus: DefineComponent<CompassPlusProps>;

export default CompassPlus;
export { CompassPlus };
