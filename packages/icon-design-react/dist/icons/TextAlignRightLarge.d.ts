import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAlignRightLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAlignRightLarge: ForwardRefExoticComponent<TextAlignRightLargeProps & RefAttributes<SVGSVGElement>>;

export default TextAlignRightLarge;
export { TextAlignRightLarge };
