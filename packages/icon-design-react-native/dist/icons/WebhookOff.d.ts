import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WebhookOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WebhookOff: ForwardRefExoticComponent<WebhookOffProps & RefAttributes<Svg>>;

export default WebhookOff;
export { WebhookOff };
