import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BagSmileTaperedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BagSmileTapered: ForwardRefExoticComponent<BagSmileTaperedProps & RefAttributes<Svg>>;

export default BagSmileTapered;
export { BagSmileTapered };
