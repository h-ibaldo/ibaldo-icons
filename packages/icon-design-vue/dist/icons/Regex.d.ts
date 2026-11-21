import type { DefineComponent } from 'vue';

export interface RegexProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Regex: DefineComponent<RegexProps>;

export default Regex;
export { Regex };
