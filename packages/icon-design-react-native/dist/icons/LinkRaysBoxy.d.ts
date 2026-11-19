import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkRaysBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkRaysBoxy: ForwardRefExoticComponent<LinkRaysBoxyProps & RefAttributes<Svg>>;

export default LinkRaysBoxy;
export { LinkRaysBoxy };
