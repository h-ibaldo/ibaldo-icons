import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextEProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextE: ForwardRefExoticComponent<TextEProps & RefAttributes<SVGSVGElement>>;

export default TextE;
export { TextE };
