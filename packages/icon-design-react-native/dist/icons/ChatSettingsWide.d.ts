import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSettingsWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSettingsWide: ForwardRefExoticComponent<ChatSettingsWideProps & RefAttributes<Svg>>;

export default ChatSettingsWide;
export { ChatSettingsWide };
