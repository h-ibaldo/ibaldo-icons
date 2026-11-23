import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HighlighterBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HighlighterBare: ForwardRefExoticComponent<HighlighterBareProps & RefAttributes<SVGSVGElement>>;

export default HighlighterBare;
export { HighlighterBare };
