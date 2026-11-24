import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatVideoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatVideo: ForwardRefExoticComponent<ChatVideoProps & RefAttributes<Svg>>;

export default ChatVideo;
export { ChatVideo };
