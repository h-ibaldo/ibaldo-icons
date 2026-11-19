import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSettingsFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSettingsFacing: ForwardRefExoticComponent<ChatStackSettingsFacingProps & RefAttributes<Svg>>;

export default ChatStackSettingsFacing;
export { ChatStackSettingsFacing };
