import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkPlusWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkPlusWide: ForwardRefExoticComponent<LinkPlusWideProps & RefAttributes<Svg>>;

export default LinkPlusWide;
export { LinkPlusWide };
