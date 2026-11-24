import type { DefineComponent } from 'vue';

export interface BackspaceCheckRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BackspaceCheckRound: DefineComponent<BackspaceCheckRoundProps>;

export default BackspaceCheckRound;
export { BackspaceCheckRound };
