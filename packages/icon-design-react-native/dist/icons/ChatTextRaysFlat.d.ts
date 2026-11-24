import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextRaysFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextRaysFlat: ForwardRefExoticComponent<ChatTextRaysFlatProps & RefAttributes<Svg>>;

export default ChatTextRaysFlat;
export { ChatTextRaysFlat };
