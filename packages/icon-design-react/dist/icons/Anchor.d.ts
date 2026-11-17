import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AnchorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Anchor: ForwardRefExoticComponent<AnchorProps & RefAttributes<SVGSVGElement>>;

export default Anchor;
export { Anchor };
