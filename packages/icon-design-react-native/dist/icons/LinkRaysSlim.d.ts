import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkRaysSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkRaysSlim: ForwardRefExoticComponent<LinkRaysSlimProps & RefAttributes<Svg>>;

export default LinkRaysSlim;
export { LinkRaysSlim };
