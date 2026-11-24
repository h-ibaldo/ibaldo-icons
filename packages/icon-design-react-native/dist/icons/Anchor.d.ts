import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AnchorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Anchor: ForwardRefExoticComponent<AnchorProps & RefAttributes<Svg>>;

export default Anchor;
export { Anchor };
