import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutPanelTopUnevenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutPanelTopUneven: ForwardRefExoticComponent<LayoutPanelTopUnevenProps & RefAttributes<Svg>>;

export default LayoutPanelTopUneven;
export { LayoutPanelTopUneven };
