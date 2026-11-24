import type { DefineComponent } from 'vue';

export interface WebhookOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WebhookOff: DefineComponent<WebhookOffProps>;

export default WebhookOff;
export { WebhookOff };
