import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkPlusFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkPlusFlat: ForwardRefExoticComponent<LinkPlusFlatProps & RefAttributes<Svg>>;

export default LinkPlusFlat;
export { LinkPlusFlat };
