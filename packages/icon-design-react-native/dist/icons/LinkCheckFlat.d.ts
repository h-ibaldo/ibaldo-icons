import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCheckFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCheckFlat: ForwardRefExoticComponent<LinkCheckFlatProps & RefAttributes<Svg>>;

export default LinkCheckFlat;
export { LinkCheckFlat };
