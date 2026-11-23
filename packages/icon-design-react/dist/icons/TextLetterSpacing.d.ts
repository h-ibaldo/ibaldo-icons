import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextLetterSpacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextLetterSpacing: ForwardRefExoticComponent<TextLetterSpacingProps & RefAttributes<SVGSVGElement>>;

export default TextLetterSpacing;
export { TextLetterSpacing };
