import type { DefineComponent } from 'vue';

export interface TrophyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Trophy: DefineComponent<TrophyProps>;

export default Trophy;
export { Trophy };
