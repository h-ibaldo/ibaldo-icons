import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackForwardBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackForwardBroken: ForwardRefExoticComponent<ChatStackForwardBrokenProps & RefAttributes<Svg>>;

export default ChatStackForwardBroken;
export { ChatStackForwardBroken };
