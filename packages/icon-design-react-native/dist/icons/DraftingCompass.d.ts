import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DraftingCompassProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DraftingCompass: ForwardRefExoticComponent<DraftingCompassProps & RefAttributes<Svg>>;

export default DraftingCompass;
export { DraftingCompass };
