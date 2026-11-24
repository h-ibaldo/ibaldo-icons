import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShareNodesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShareNodes: ForwardRefExoticComponent<ShareNodesProps & RefAttributes<SVGSVGElement>>;

export default ShareNodes;
export { ShareNodes };
