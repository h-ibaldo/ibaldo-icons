import type { DefineComponent } from 'vue';

export interface BackspaceRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BackspaceRound: DefineComponent<BackspaceRoundProps>;

export default BackspaceRound;
export { BackspaceRound };
