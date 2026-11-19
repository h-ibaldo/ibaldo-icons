import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSettingsLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSettingsLayered: ForwardRefExoticComponent<ChatStackSettingsLayeredProps & RefAttributes<Svg>>;

export default ChatStackSettingsLayered;
export { ChatStackSettingsLayered };
