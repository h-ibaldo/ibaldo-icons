import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebhookOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebhookOff: ForwardRefExoticComponent<WebhookOffProps & RefAttributes<SVGSVGElement>>;

export default WebhookOff;
export { WebhookOff };
