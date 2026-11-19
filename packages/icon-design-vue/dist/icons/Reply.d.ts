import type { DefineComponent } from 'vue';

export interface ReplyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Reply: DefineComponent<ReplyProps>;

export default Reply;
export { Reply };
