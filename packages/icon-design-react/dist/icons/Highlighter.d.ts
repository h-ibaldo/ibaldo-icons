import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HighlighterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Highlighter: ForwardRefExoticComponent<HighlighterProps & RefAttributes<SVGSVGElement>>;

export default Highlighter;
export { Highlighter };
