import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenBurstWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenBurstWide: ForwardRefExoticComponent<LinkBrokenBurstWideProps & RefAttributes<Svg>>;

export default LinkBrokenBurstWide;
export { LinkBrokenBurstWide };
