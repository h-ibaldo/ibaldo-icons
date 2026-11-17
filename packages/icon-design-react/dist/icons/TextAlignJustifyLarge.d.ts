import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAlignJustifyLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAlignJustifyLarge: ForwardRefExoticComponent<TextAlignJustifyLargeProps & RefAttributes<SVGSVGElement>>;

export default TextAlignJustifyLarge;
export { TextAlignJustifyLarge };
