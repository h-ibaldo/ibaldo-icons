import type { DefineComponent } from 'vue';

export interface PhoneChatRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneChatRound: DefineComponent<PhoneChatRoundProps>;

export default PhoneChatRound;
export { PhoneChatRound };
