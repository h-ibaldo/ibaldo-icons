import type { DefineComponent } from 'vue';

export interface TextAdsChatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAdsChat: DefineComponent<TextAdsChatProps>;

export default TextAdsChat;
export { TextAdsChat };
