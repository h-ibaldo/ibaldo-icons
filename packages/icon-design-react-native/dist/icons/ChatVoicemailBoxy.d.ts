import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatVoicemailBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatVoicemailBoxy: ForwardRefExoticComponent<ChatVoicemailBoxyProps & RefAttributes<Svg>>;

export default ChatVoicemailBoxy;
export { ChatVoicemailBoxy };
