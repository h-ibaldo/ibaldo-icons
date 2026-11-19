import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatRaysSideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatRaysSide: ForwardRefExoticComponent<ChatRaysSideProps & RefAttributes<Svg>>;

export default ChatRaysSide;
export { ChatRaysSide };
