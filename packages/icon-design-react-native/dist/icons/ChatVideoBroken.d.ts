import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatVideoBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatVideoBroken: ForwardRefExoticComponent<ChatVideoBrokenProps & RefAttributes<Svg>>;

export default ChatVideoBroken;
export { ChatVideoBroken };
