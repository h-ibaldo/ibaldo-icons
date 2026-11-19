import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTriangleBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTriangleBroken: ForwardRefExoticComponent<ChatTriangleBrokenProps & RefAttributes<Svg>>;

export default ChatTriangleBroken;
export { ChatTriangleBroken };
