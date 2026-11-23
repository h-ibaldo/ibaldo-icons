import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAlignJustifyRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAlignJustifyRight: ForwardRefExoticComponent<TextAlignJustifyRightProps & RefAttributes<SVGSVGElement>>;

export default TextAlignJustifyRight;
export { TextAlignJustifyRight };
