import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShareNodesLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShareNodesLarge: ForwardRefExoticComponent<ShareNodesLargeProps & RefAttributes<SVGSVGElement>>;

export default ShareNodesLarge;
export { ShareNodesLarge };
