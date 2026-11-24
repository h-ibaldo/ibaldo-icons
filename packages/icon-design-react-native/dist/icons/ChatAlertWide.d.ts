import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatAlertWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatAlertWide: ForwardRefExoticComponent<ChatAlertWideProps & RefAttributes<Svg>>;

export default ChatAlertWide;
export { ChatAlertWide };
