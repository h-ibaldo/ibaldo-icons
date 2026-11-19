import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEditBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEditBroken: ForwardRefExoticComponent<ChatEditBrokenProps & RefAttributes<Svg>>;

export default ChatEditBroken;
export { ChatEditBroken };
