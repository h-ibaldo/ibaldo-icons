import type { DefineComponent } from 'vue';

export interface PhoneChatSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneChatSharp: DefineComponent<PhoneChatSharpProps>;

export default PhoneChatSharp;
export { PhoneChatSharp };
