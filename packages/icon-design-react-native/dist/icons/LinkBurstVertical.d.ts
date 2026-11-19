import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBurstVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBurstVertical: ForwardRefExoticComponent<LinkBurstVerticalProps & RefAttributes<Svg>>;

export default LinkBurstVertical;
export { LinkBurstVertical };
