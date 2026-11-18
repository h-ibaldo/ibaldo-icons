import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackBanCornerFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackBanCornerFacing: ForwardRefExoticComponent<ChatStackBanCornerFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackBanCornerFacing;
export { ChatStackBanCornerFacing };
