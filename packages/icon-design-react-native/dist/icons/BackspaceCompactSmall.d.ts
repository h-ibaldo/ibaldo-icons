import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BackspaceCompactSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BackspaceCompactSmall: ForwardRefExoticComponent<BackspaceCompactSmallProps & RefAttributes<Svg>>;

export default BackspaceCompactSmall;
export { BackspaceCompactSmall };
