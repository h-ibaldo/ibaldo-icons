import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudLinkTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudLinkTall: ForwardRefExoticComponent<CloudLinkTallProps & RefAttributes<Svg>>;

export default CloudLinkTall;
export { CloudLinkTall };
