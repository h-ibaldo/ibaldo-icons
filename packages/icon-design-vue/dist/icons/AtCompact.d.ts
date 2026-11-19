import type { DefineComponent } from 'vue';

export interface AtCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtCompact: DefineComponent<AtCompactProps>;

export default AtCompact;
export { AtCompact };
