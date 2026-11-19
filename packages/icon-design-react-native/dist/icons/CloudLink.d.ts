import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudLinkProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudLink: ForwardRefExoticComponent<CloudLinkProps & RefAttributes<Svg>>;

export default CloudLink;
export { CloudLink };
