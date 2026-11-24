import type { DefineComponent } from 'vue';

export interface AnchorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Anchor: DefineComponent<AnchorProps>;

export default Anchor;
export { Anchor };
