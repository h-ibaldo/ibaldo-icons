import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTriangleBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTriangleBroken: ForwardRefExoticComponent<ChatStackTriangleBrokenProps & RefAttributes<Svg>>;

export default ChatStackTriangleBroken;
export { ChatStackTriangleBroken };
