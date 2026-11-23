import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextCursorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextCursor: ForwardRefExoticComponent<TextCursorProps & RefAttributes<SVGSVGElement>>;

export default TextCursor;
export { TextCursor };
