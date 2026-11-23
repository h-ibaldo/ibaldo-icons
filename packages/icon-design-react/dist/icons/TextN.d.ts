import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextNProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextN: ForwardRefExoticComponent<TextNProps & RefAttributes<SVGSVGElement>>;

export default TextN;
export { TextN };
