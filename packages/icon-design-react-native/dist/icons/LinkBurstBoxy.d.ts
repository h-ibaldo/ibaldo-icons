import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBurstBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBurstBoxy: ForwardRefExoticComponent<LinkBurstBoxyProps & RefAttributes<Svg>>;

export default LinkBurstBoxy;
export { LinkBurstBoxy };
