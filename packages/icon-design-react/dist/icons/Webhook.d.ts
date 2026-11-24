import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebhookProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Webhook: ForwardRefExoticComponent<WebhookProps & RefAttributes<SVGSVGElement>>;

export default Webhook;
export { Webhook };
