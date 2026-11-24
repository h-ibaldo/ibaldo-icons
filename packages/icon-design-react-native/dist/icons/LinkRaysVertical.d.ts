import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkRaysVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkRaysVertical: ForwardRefExoticComponent<LinkRaysVerticalProps & RefAttributes<Svg>>;

export default LinkRaysVertical;
export { LinkRaysVertical };
