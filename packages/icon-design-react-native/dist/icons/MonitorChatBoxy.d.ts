import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorChatBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MonitorChatBoxy: ForwardRefExoticComponent<MonitorChatBoxyProps & RefAttributes<Svg>>;

export default MonitorChatBoxy;
export { MonitorChatBoxy };
