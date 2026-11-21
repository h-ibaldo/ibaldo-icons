import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WebhookProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Webhook: ForwardRefExoticComponent<WebhookProps & RefAttributes<Svg>>;

export default Webhook;
export { Webhook };
