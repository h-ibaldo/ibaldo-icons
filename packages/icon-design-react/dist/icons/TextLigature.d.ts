import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextLigatureProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextLigature: ForwardRefExoticComponent<TextLigatureProps & RefAttributes<SVGSVGElement>>;

export default TextLigature;
export { TextLigature };
