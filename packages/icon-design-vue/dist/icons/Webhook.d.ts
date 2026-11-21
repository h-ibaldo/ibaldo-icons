import type { DefineComponent } from 'vue';

export interface WebhookProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Webhook: DefineComponent<WebhookProps>;

export default Webhook;
export { Webhook };
