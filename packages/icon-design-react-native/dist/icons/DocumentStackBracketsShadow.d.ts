import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentStackBracketsShadowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentStackBracketsShadow: ForwardRefExoticComponent<DocumentStackBracketsShadowProps & RefAttributes<Svg>>;

export default DocumentStackBracketsShadow;
export { DocumentStackBracketsShadow };
