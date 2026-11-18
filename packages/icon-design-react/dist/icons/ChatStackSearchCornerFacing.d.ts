import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSearchCornerFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSearchCornerFacing: ForwardRefExoticComponent<ChatStackSearchCornerFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSearchCornerFacing;
export { ChatStackSearchCornerFacing };
