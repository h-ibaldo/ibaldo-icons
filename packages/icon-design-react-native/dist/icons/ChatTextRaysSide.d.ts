import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextRaysSideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextRaysSide: ForwardRefExoticComponent<ChatTextRaysSideProps & RefAttributes<Svg>>;

export default ChatTextRaysSide;
export { ChatTextRaysSide };
