import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtDotsBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtDotsBoxy: ForwardRefExoticComponent<AtDotsBoxyProps & RefAttributes<Svg>>;

export default AtDotsBoxy;
export { AtDotsBoxy };
