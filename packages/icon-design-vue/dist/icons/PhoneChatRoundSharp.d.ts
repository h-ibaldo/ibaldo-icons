import type { DefineComponent } from 'vue';

export interface PhoneChatRoundSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneChatRoundSharp: DefineComponent<PhoneChatRoundSharpProps>;

export default PhoneChatRoundSharp;
export { PhoneChatRoundSharp };
