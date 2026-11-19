import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHashBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHashBroken: ForwardRefExoticComponent<ChatStackHashBrokenProps & RefAttributes<Svg>>;

export default ChatStackHashBroken;
export { ChatStackHashBroken };
