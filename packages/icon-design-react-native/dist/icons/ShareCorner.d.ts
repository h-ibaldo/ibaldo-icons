import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ShareCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ShareCorner: ForwardRefExoticComponent<ShareCornerProps & RefAttributes<Svg>>;

export default ShareCorner;
export { ShareCorner };
