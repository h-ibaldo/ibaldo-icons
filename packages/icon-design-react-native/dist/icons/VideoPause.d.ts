import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VideoPauseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VideoPause: ForwardRefExoticComponent<VideoPauseProps & RefAttributes<Svg>>;

export default VideoPause;
export { VideoPause };
