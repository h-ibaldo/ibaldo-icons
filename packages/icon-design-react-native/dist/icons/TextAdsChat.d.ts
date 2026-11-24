import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextAdsChatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextAdsChat: ForwardRefExoticComponent<TextAdsChatProps & RefAttributes<Svg>>;

export default TextAdsChat;
export { TextAdsChat };
