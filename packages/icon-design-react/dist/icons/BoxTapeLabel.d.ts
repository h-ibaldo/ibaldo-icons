import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxTapeLabelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxTapeLabel: ForwardRefExoticComponent<BoxTapeLabelProps & RefAttributes<SVGSVGElement>>;

export default BoxTapeLabel;
export { BoxTapeLabel };
