import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GiftRibbonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GiftRibbon: ForwardRefExoticComponent<GiftRibbonProps & RefAttributes<Svg>>;

export default GiftRibbon;
export { GiftRibbon };
