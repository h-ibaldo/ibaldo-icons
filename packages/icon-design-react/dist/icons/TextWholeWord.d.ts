import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextWholeWordProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextWholeWord: ForwardRefExoticComponent<TextWholeWordProps & RefAttributes<SVGSVGElement>>;

export default TextWholeWord;
export { TextWholeWord };
