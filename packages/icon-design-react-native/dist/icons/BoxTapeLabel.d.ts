import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxTapeLabelProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxTapeLabel: ForwardRefExoticComponent<BoxTapeLabelProps & RefAttributes<Svg>>;

export default BoxTapeLabel;
export { BoxTapeLabel };
