import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatArrowRightOutBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatArrowRightOutBoxy: ForwardRefExoticComponent<ChatArrowRightOutBoxyProps & RefAttributes<Svg>>;

export default ChatArrowRightOutBoxy;
export { ChatArrowRightOutBoxy };
